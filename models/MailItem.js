// models/Mail.js
import pool from "../config/db.js";

const Mail = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM mail_items");
    return rows;
  },

  create: async (data) => {
    const { type, sender, recipient, received_at, status } = data;
    const [result] = await pool.query(
      "INSERT INTO mail_items (type, sender, recipient, received_at, status) VALUES (?, ?, ?, ?, ?)",
      [type, sender, recipient, received_at, status]
    );
    return { id: result.insertId, type, sender, recipient, received_at, status };
  },

  update: async (id, data) => {
    const { type, sender, recipient, received_at, status } = data;
    await pool.query(
      "UPDATE mail_items SET type = ?, sender = ?, recipient = ?, received_at = ?, status = ? WHERE id = ?",
      [type, sender, recipient, received_at, status, id]
    );
    return { id, type, sender, recipient, received_at, status };
  },

  delete: async (id) => {
    await pool.query("DELETE FROM mail_items WHERE id = ?", [id]);
  }
};

export default Mail;
