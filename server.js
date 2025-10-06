import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

import visitorsRoutes from "./routes/visitorsRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import callRoutes from "./routes/callRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import consomRoutes from "./routes/consomRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";
import statsRoutes from "./routes/statsRoutes.js";
import pool from "./config/db.js";
import bcrypt from "bcrypt";


// ⚠️ CORS correct pour les cookies httpOnly
app.use(cors({
  origin: "http://localhost:5173", // ton frontend
  credentials: true,               // important pour envoyer les cookies
}));
// Middlewares
app.use(express.json());
app.use(cookieParser());


// Routes

app.use("/api/visitors", visitorsRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/calls", callRoutes);
app.use("/api/mail", mailRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/consommation", consomRoutes);
app.use("/api", usersRoutes);
app.use("/api", statsRoutes);


app.get('/', (_req, res) => res.send('Reception API is running'));





/************************************************************************* */
// fonction pour modifier le mot de passe d'un utilisateur

/*const username = "admin";     // l'utilisateur à modifier
const newPlain = "admin123";      // nouveau mot test

(async () => {
  try {
    const hashed = await bcrypt.hash(newPlain, 10);
    const [result] = await pool.query(
      "UPDATE users SET password = ? WHERE username = ?",
      [hashed, username]
    );
    console.log("Updated rows:", result.affectedRows);
    console.log("New hash:", hashed);

    // immediate verify
    const ok = await bcrypt.compare(newPlain, hashed);
    console.log("Self-verify compare:", ok);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();*/

/*************************************************************************** */
// C'EST une fonction pour réinitialiser le mot de passe de l'utilisateur "mamelamp"

/*async function run() {
  const db = pool;
  const newPassword = "diop123"; // choisis un mot de passe fort
  const hash = await bcrypt.hash(newPassword, 10);
  await db.query("UPDATE users SET password = ? WHERE username = ?", [hash, "password123"]);
  console.log("Mot de passe réinitialisé pour password123 ->", newPassword);
  process.exit(0);
}
run().catch(err => { console.error(err); process.exit(1); });*/

/*************************************************************************** */
  // On récupère tous les utilisateurs
 /* const [users] = await pool.query('SELECT id, password FROM users');

  for (let user of users) {
    const plainPassword = user.password; // ton ancien mot de passe en clair
    const hashedPassword = await bcrypt.hash(plainPassword, 10); // hachage

    // Mise à jour en base pour lhasher les users déja enregistrer
    await pool.query('UPDATE users SET password=? WHERE id=?', [hashedPassword, user.id]);
    console.log(`Mot de passe de l’utilisateur ${user.id} haché`);
  }

  pool.end();
  console.log("Tous les mots de passe ont été hachés");
  process.exit(0);*/

/*************************************************************************** */


// Lancement serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Backend sur http://localhost:${PORT}`));






