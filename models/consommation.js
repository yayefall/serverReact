// models/Consommation.js
import pool from "../config/db.js";

const Consommation = {
  // Récupérer toutes les consommations
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM consommation ORDER BY date_consommation DESC");
    return rows;
  },

  // Créer une nouvelle consommation
  create: async (data) => {
    const { date_consommation, objet, quantite, nom_complet, signature } = data;
    const [result] = await pool.query(
      "INSERT INTO consommation (date_consommation, objet, quantite, nom_complet, signature) VALUES (?, ?, ?, ?, ?)",
      [date_consommation, objet, quantite, nom_complet, signature]
    );
    return { id: result.insertId, date_consommation, objet, quantite, nom_complet, signature };
  },

  // Mettre à jour une consommation existante
  update: async (id, data) => {
    const { date_consommation, objet, quantite, nom_complet, signature } = data;
    await pool.query(
      "UPDATE consommation SET date_consommation = ?, objet = ?, quantite = ?, nom_complet = ?, signature = ? WHERE id = ?",
      [date_consommation, objet, quantite, nom_complet, signature, id]
    );
    return { id, date_consommation, objet, quantite, nom_complet, signature };
  },

  // Supprimer une consommation
  delete: async (id) => {
    await pool.query("DELETE FROM consommation WHERE id = ?", [id]);
  }
};

export default Consommation;
