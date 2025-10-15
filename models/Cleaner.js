// models/cleaner.js
import pool from "../config/db.js";

const Cleaner = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM cleaner");
    return rows;
  },

  create: async (data) => {
    const { nomComplet,fonction, telephone, lieu, localisation } = data;
    const [result] = await pool.query(
      "INSERT INTO cleaner (nomComplet,fonction, telephone, lieu, localisation) VALUES (?, ?, ?, ?, ?)",
      [nomComplet,fonction, telephone, lieu, localisation]
    );
    return { id: result.insertId,nomComplet,fonction, telephone, lieu, localisation };
  },

  update: async (id, data) => {
    const { nomComplet,fonction, telephone, lieu, localisation } = data;
    await pool.query(
      "UPDATE cleaner SET nomComplet = ?, fonction = ?,telephone = ?, lieu = ?, localisation = ? WHERE id = ?",
      [nomComplet,fonction, telephone, lieu, localisation,id]
    );
    return { id,nomComplet,fonction, telephone, lieu, localisation };
  },

  delete: async (id) => {
    await pool.query("DELETE FROM cleaner WHERE id = ?", [id]);
  }
};

export default Cleaner;
