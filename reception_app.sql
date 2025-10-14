-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 14 oct. 2025 à 14:25
-- Version du serveur :  8.0.42-0ubuntu0.20.04.1
-- Version de PHP : 7.4.3-4ubuntu2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `reception_app`
--

-- --------------------------------------------------------

--
-- Structure de la table `appointments`
--

CREATE TABLE `appointments` (
  `id` int NOT NULL,
  `title` varchar(160) COLLATE utf8mb4_unicode_ci NOT NULL,
  `with_person` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime DEFAULT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `appointments`
--

INSERT INTO `appointments` (`id`, `title`, `with_person`, `location`, `start_time`, `end_time`, `notes`) VALUES
(1, 'Réunion projet A', 'Mamadou Fall', 'Salle 101', '2025-09-24 10:00:00', '2025-09-24 11:00:00', 'Préparer les documents'),
(2, 'RDV client', 'Awa Ba', 'Salle 215', '2025-09-25 14:00:00', '2025-09-25 15:00:00', 'Apporter contrat'),
(5, 'Projet A', 'Menager', 'Salle 214', '2025-09-24 11:15:00', '2025-09-24 11:15:00', 'Faire une reunion'),
(6, 'Entretien', 'Babacar Sene', 'Sale 207', '2025-10-01 12:25:00', '2025-10-01 13:26:00', 'Entretien D\'embauche'),
(7, 'Présentation', 'le Menager', 'meeting rome105', '2025-10-02 16:05:00', '2025-10-02 17:05:00', 'depot des dessiers\n');

-- --------------------------------------------------------

--
-- Structure de la table `calls`
--

CREATE TABLE `calls` (
  `id` int NOT NULL,
  `caller_name` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci,
  `received_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `transferred_to` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `calls`
--

INSERT INTO `calls` (`id`, `caller_name`, `phone`, `message`, `received_at`, `transferred_to`) VALUES
(1, 'Cheikh Sow', '77445566', 'Demande info', '2025-09-23 09:30:00', 'Secrétariat'),
(2, 'Marie Ndiaye', '77112233', 'Réclamation', '2025-09-23 10:00:00', 'Service Client'),
(6, 'Matar Sene', '778963214', 'Réclamation', '2025-09-24 17:04:07', 'Moustapha'),
(7, 'Moustapha Ciss', '775896321', 'Livraison à faire', '2025-10-03 09:03:48', 'Département Achat');

-- --------------------------------------------------------

--
-- Structure de la table `cleaner`
--

CREATE TABLE `cleaner` (
  `id` int NOT NULL,
  `nomComplet` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fonction` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telephone` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lieu` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `localisation` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `cleaner`
--

INSERT INTO `cleaner` (`id`, `nomComplet`, `fonction`, `telephone`, `lieu`, `localisation`, `created_at`) VALUES
(1, 'Pape Djiby ', 'Chef d\'equipe', '775592510', 'CHEC', 'CHEC', '2025-10-10 11:48:14'),
(12, 'Ndeye Fatou', 'Technichienne Surface', '771648076', 'CHEC Siege Devant', 'Bureau Gauche et couloir', '2025-10-13 14:54:23'),
(13, 'Sophia', 'Technichienne Surface', '788340013', 'Siege CHEC devant', 'couloir 2', '2025-10-13 14:55:09'),
(14, 'Khady Dieng', 'Technichienne Surface', '772836525', 'Siege CHEC derriére', 'Bureau Droit et Couloir', '2025-10-13 14:56:07'),
(15, 'Maréme Diop', 'Technichienne Surface', '773984839', 'Siege CHEC derriére', 'Bureau Gauche et couloir', '2025-10-13 14:57:14'),
(16, 'Rokhaya Séne', 'Technichienne Surface', '777757309', 'Siege CHEC derriére', 'Toilette', '2025-10-13 14:58:08'),
(17, 'Maréme Ciss', 'Technichienne Surface', '775753987', 'Siege CHEC derriére', 'Toilette', '2025-10-13 14:58:59'),
(18, 'Aliou Guye', 'Technichien Surface', '785640981', 'Siege CHEC derriére', 'Toilette', '2025-10-13 14:59:41'),
(19, 'Mariama Baldé', 'Technichienne Surface', '782864255', 'D Port', 'Bureau et toilette', '2025-10-13 15:02:35'),
(20, 'Maimouna', 'Technichienne Surface', '781692463', 'D Port', 'Bureau et toilette', '2025-10-13 15:03:13'),
(21, 'Marlyatou', 'Aide Cuisiniére', '778547717', 'D Port', 'Cuisine DP', '2025-10-13 15:04:27'),
(22, 'Mamy', 'Magaziniére', '772850336', 'Campus CHEC', 'Cuisine', '2025-10-13 15:06:08'),
(23, 'Oumy Dieng', 'Technichienne Surface', '778841297', 'Siege CHEC derriére', 'Bureau Gauche et couloir', '2025-10-13 15:07:03'),
(24, 'Dado Gueye', 'Technichienne Surface', '778821498', 'Siege CHEC devant', 'Bureau Droit et Couloir', '2025-10-13 15:07:51'),
(25, 'Amy Diouf', 'Aide Cuisiniére', '763218589', 'Campus CHEC', 'Cuisine', '2025-10-13 15:09:02'),
(26, 'Souwado Daaga', 'Aide Cuisiniére', '783876961', 'Campus CHEC', 'Cuisine', '2025-10-13 15:09:56'),
(27, 'Amy Seck', 'Technichienne Surface', '773663318', 'Campus CHEC', 'Chambre', '2025-10-13 15:11:04'),
(28, 'Amy Diop', 'Technichienne Surface', '774352065', 'Campus CHEC', 'Chambre', '2025-10-13 15:11:46'),
(29, 'Arame ', 'Technichienne Surface', '777950579', 'Siege CHEC devant', 'Bureau Droit et Couloir', '2025-10-13 15:12:34');

-- --------------------------------------------------------

--
-- Structure de la table `consommation`
--

CREATE TABLE `consommation` (
  `id` int NOT NULL,
  `date_consommation` datetime NOT NULL,
  `objet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quantite` int NOT NULL,
  `nom_complet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `signature` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `consommation`
--

INSERT INTO `consommation` (`id`, `date_consommation`, `objet`, `quantite`, `nom_complet`, `signature`, `created_at`) VALUES
(3, '2025-09-26 16:29:00', 'bottle 20 litre', 2, 'Cuisine DP', 'signéé', '2025-09-26 16:29:41'),
(4, '2025-09-26 16:29:00', 'bottle 10 litre', 3, 'Baye Ndiaye', 'signé', '2025-09-26 16:30:31'),
(5, '2025-09-29 08:22:00', 'bottle 10 litre', 1, 'Ma Siyaw yun', 'signé', '2025-09-29 08:23:55'),
(6, '2025-09-30 14:02:00', 'bottle 20 litre', 5, 'chauffeurs DP', 'signé', '2025-09-30 14:02:31'),
(7, '2025-09-30 14:02:00', 'bottle 10 litre', 2, 'Wangli', 'signé', '2025-09-30 14:03:18'),
(8, '2025-09-30 14:03:00', 'Pack bouteille 0,5 litre', 1, 'Mme Nine', 'signéé', '2025-09-30 14:04:10'),
(9, '2025-10-01 10:08:00', 'Pack bouteille 0,5 litre', 2, 'Mr Philo DP', 'signé', '2025-10-01 10:08:43'),
(10, '2025-10-02 08:42:00', 'bottle 10 litre', 2, 'femme de menage', 'signéé', '2025-10-02 08:44:06'),
(11, '2025-10-06 09:32:00', 'bottle 20 litre', 1, 'Reception', 'signéé', '2025-10-06 09:33:02'),
(12, '2025-10-07 09:18:00', 'bottle 10 litre', 2, 'Mme Nine', 'signéé', '2025-10-07 09:18:53');

-- --------------------------------------------------------

--
-- Structure de la table `mail_items`
--

CREATE TABLE `mail_items` (
  `id` int NOT NULL,
  `type` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sender` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recipient` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `received_at` datetime DEFAULT NULL,
  `status` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `mail_items`
--

INSERT INTO `mail_items` (`id`, `type`, `sender`, `recipient`, `received_at`, `status`, `created_at`) VALUES
(1, 'Lettre', 'Société Z', 'Alioune Diop', '2025-09-23 08:00:00', 'Non lu', '2025-09-23 11:56:27'),
(2, 'Colis', 'Amazon', 'Fatou Ndiaye', '2025-09-23 12:30:00', 'Distribué', '2025-09-23 11:56:27'),
(3, 'Demande', 'Socosim', 'Lamp Fall', '2025-09-24 17:20:00', 'Distribué', '2025-09-24 17:20:40'),
(4, 'Réclamation', 'Société M', 'CHEC', '2025-10-03 09:05:00', 'Lu', '2025-10-03 09:05:30');

-- --------------------------------------------------------

--
-- Structure de la table `partenaire`
--

CREATE TABLE `partenaire` (
  `id` int NOT NULL,
  `nom_complet` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `entreprise` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telephone` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adresse` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `localisation` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date_creation` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `partenaire`
--

INSERT INTO `partenaire` (`id`, `nom_complet`, `entreprise`, `telephone`, `email`, `adresse`, `localisation`, `date_creation`) VALUES
(1, 'Commercial', 'Groupe Kiréne', '775770008', 'kirene@gmail.com', 'Ront Point Saly', 'Mbour, Sénégal', '2025-10-14 10:28:20'),
(3, 'Nettoyeur', 'Groupe UCG', '778005925', 'ucg@gmail.com', 'Reubeuss', 'Keur Massar', '2025-10-14 14:24:41');

-- --------------------------------------------------------

--
-- Structure de la table `tasks`
--

CREATE TABLE `tasks` (
  `id` int NOT NULL,
  `title` varchar(160) COLLATE utf8mb4_unicode_ci NOT NULL,
  `due_date` datetime DEFAULT NULL,
  `done` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `due_date`, `done`) VALUES
(1, 'Préparer réunion', '2025-09-24 09:03:00', 0),
(2, 'Envoyer rapport', '2025-09-25 09:02:00', 0),
(3, 'Faire une présentation', '2025-09-24 09:05:00', 0),
(4, 'Absence de sophia (malade depuis 24 au 26/09/2025)', '2025-09-26 17:08:00', 0),
(5, 'manque  de mouchoir et de gel douche', '2025-09-26 17:12:00', 0),
(6, 'chaque vendredi je dois vérifier les salles de réunion avant 14h', '2025-09-26 17:16:00', 0),
(7, 'Maryama Cleaner DP (malade) depuis 07/10/2025', '2025-10-07 09:20:00', 0),
(8, 'Rokhayatou malade 08/10/2025', '2025-10-08 09:49:00', 0),
(10, 'Marlyatou malade depuis le 01/10/2025', '2025-10-01 09:55:00', 0);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` enum('admin','user') COLLATE utf8mb4_unicode_ci DEFAULT 'user',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'Mame lamp Diop', 'mamelamp', 'lampdiop@gmail.com', '$2b$10$pauxjmAdvCN8aZsIOrlBeuapASD6engES5sJPzeTyRvwZGntGuGWi', 'user', '2025-09-29 11:46:01'),
(2, 'Moustapha Ciss', 'moustapha313', 'tapha313@gmail.com', '$2b$10$sS5UFMceUB49a3C/90fpru9ZU/.cgS//Y5BjFTn4pzTZEDsn.Mrwy', 'admin', '2025-09-30 08:24:43'),
(3, 'admin', 'admin', 'admin@gmail.com', '$2b$10$5iGRcd4RAm09ZRsj5GWD6OQH/C7tCnyHZmYpj2zydI5NzAgFKJClm', 'admin', '2025-09-30 14:28:18');

-- --------------------------------------------------------

--
-- Structure de la table `visitors`
--

CREATE TABLE `visitors` (
  `id` int NOT NULL,
  `full_name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `purpose` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `host_department` varchar(120) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `arrival_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `departure_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `visitors`
--

INSERT INTO `visitors` (`id`, `full_name`, `company`, `purpose`, `host_department`, `arrival_time`, `departure_time`) VALUES
(1, 'Alioune Diop', 'Societé Z', 'Meeting', 'RH', '2025-09-23 09:27:36', '2025-09-23 09:26:21'),
(2, 'Fatou Ndiaye', 'Amazon', 'livraison', 'logistique', '2025-09-23 09:28:13', '2025-09-23 09:26:21'),
(5, 'Abdou Fall', 'CHEC', 'Meeting', 'Finance', '2025-09-24 10:33:25', '2025-09-24 10:33:00'),
(6, 'Alioune Ndiaye', 'Societé M', 'Accueil', 'Achat', '2025-09-25 10:58:53', '2025-09-25 10:58:00'),
(7, 'Bassirou Diop', 'Societé F', 'livraison', 'Commeciale', '2025-10-01 12:16:25', '2025-10-01 12:16:00'),
(8, 'Mame Fall Diop', 'Groupe CID', 'Présentation', 'Designer', '2025-10-02 14:41:06', '2025-10-02 14:40:00'),
(9, 'Yaye Fall Dev', 'Start Up Dev', 'Réunion', 'Developpement', '2025-10-02 14:42:34', '2025-10-02 14:42:00');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `calls`
--
ALTER TABLE `calls`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cleaner`
--
ALTER TABLE `cleaner`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `consommation`
--
ALTER TABLE `consommation`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `mail_items`
--
ALTER TABLE `mail_items`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `partenaire`
--
ALTER TABLE `partenaire`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Index pour la table `visitors`
--
ALTER TABLE `visitors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `calls`
--
ALTER TABLE `calls`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `cleaner`
--
ALTER TABLE `cleaner`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `consommation`
--
ALTER TABLE `consommation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `mail_items`
--
ALTER TABLE `mail_items`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `partenaire`
--
ALTER TABLE `partenaire`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `visitors`
--
ALTER TABLE `visitors`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
