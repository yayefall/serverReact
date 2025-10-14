// models/cleaner.js
import pool from "../config/db.js";

const Partenaire = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM partenaire");
    return rows;
  },

  create: async (data) => {
    const { nom_complet, entreprise, telephone, email, adresse, localisation } = data;
    const [result] = await pool.query(
      "INSERT INTO partenaire (nom_complet, entreprise, telephone, email, adresse, localisation) VALUES (?, ?, ?, ?, ?,?)",
      [nom_complet, entreprise, telephone, email,adresse, localisation]
    );
    return { id: result.insertId,nom_complet, entreprise, telephone, email, adresse, localisation };
  },

  update: async (id, data) => {
    const {nom_complet, entreprise, telephone, email, adresse, localisation } = data;
    await pool.query(
      "UPDATE partenaire SET nom_complet = ?, entreprise = ?, telephone = ?, email = ?, adresse = ?, localisation = ? WHERE id = ?",
      [nom_complet, entreprise, telephone, email, adresse, localisation ,id]
    );
    return {id,nom_complet, entreprise, telephone, email, adresse, localisation };
  },

  delete: async (id) => {
    await pool.query("DELETE FROM partenaire WHERE id = ?", [id]);
  }
};

export default Partenaire;
