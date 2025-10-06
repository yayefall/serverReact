// backend/routes/auth.js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../config/db.js";
import cookieParser from "cookie-parser";

const router = express.Router();
const db = pool;
const JWT_SECRET = process.env.JWT_SECRET || "votre_secret_ici";

// ⚠️ Pour que Express lise les cookies
router.use(cookieParser());

// Middleware authentification avec cookie httpOnly
function authenticateToken(req, res, next) {
  const token = req.cookies.token; // récupère cookie "token"
  if (!token) return res.status(401).json({ error: "Token manquant" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Token invalide" });
    req.user = user;
    next();
  });
}

// Middleware admin
function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({ error: "Accès interdit" });
  }
  next();
}

// ➡️ Connexion
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Username et mot de passe requis" });
  }

  try {
    const [rows] = await db.query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    if (rows.length === 0) {
      return res.status(401).json({ message: "Utilisateur inexistant" });
    }

    const user = rows[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    // ✅ Génère token JWT avec durée 7 jours
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Met le token dans un cookie httpOnly valable 1 heure
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // https seulement en prod
      maxAge: 60 * 60 * 1000,
    });

    // Renvoie juste infos user (sans token)
    res.json({
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Erreur serveur login:", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// ➡️ Déconnexion (efface cookie)
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Déconnecté" });
});

// ➡️ Récupérer user actuel (pour garder la session)
router.get("/me", authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

// ➡️ CRUD utilisateurs
router.get("/users", authenticateToken, requireAdmin, async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, name, username, email, role, created_at FROM users"
    );
    res.json(rows);
  } catch (err) {
    console.error("Erreur récupération users:", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.post("/users", authenticateToken, requireAdmin, async (req, res) => {
  const { name, username, email, password, role } = req.body;
  if (!name || !username || !email || !password || !role)
    return res
      .status(400)
      .json({ message: "Tous les champs sont obligatoires" });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query(
      "INSERT INTO users (name, username, email, password,role) VALUES (?, ?, ?, ?,?)",
      [name, username, email, hashedPassword, role]
    );
    res.json({ message: "Utilisateur créé avec succès" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.put("/users/:id", authenticateToken, requireAdmin, async (req, res) => {
  const { id } = req.params;
  const { name, username, email, password, role } = req.body;
  const fields = [];
  const values = [];

  if (name) {
    fields.push("name = ?");
    values.push(name);
  }
  if (username) {
    fields.push("username = ?");
    values.push(username);
  }
  if (email) {
    fields.push("email = ?");
    values.push(email);
  }
  if (role) {
    fields.push("role = ?");
    values.push(role);
  }
  if (password) {
    const hashed = await bcrypt.hash(password, 10);
    fields.push("password = ?");
    values.push(hashed);
  }

  if (fields.length === 0) {
    return res.status(400).json({ message: "Aucun champ à mettre à jour" });
  }

  values.push(id);
  try {
    const sql = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;
    await db.query(sql, values);
    res.json({ message: "Utilisateur mis à jour" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.delete(
  "/users/:id",
  authenticateToken,
  requireAdmin,
  async (req, res) => {
    const { id } = req.params;
    try {
      await db.query("DELETE FROM users WHERE id = ?", [id]);
      res.json({ message: "Utilisateur supprimé" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Erreur serveur" });
    }
  }
);

export default router;
