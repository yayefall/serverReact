// models/Call.js
import pool from "../config/db.js";

const Call = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM calls");
    return rows;
  },

  create: async (data) => {
    const { caller_name, phone, message, transferred_to } = data;
    const [result] = await pool.query(
      "INSERT INTO calls (caller_name, phone, message,  transferred_to) VALUES (?, ?, ?, ?)",
      [caller_name, phone, message,  transferred_to]
    );
    return { id: result.insertId, caller_name, phone, message, transferred_to };
  },

  update: async (id, data) => {
    const { caller_name, phone, message,  transferred_to } = data;
    await pool.query(
      "UPDATE calls SET caller_name = ?, phone = ?, message = ?, transferred_to = ? WHERE id = ?",
      [caller_name, phone, message, transferred_to, id]
    );
    return { id, caller_name, phone, message, transferred_to };
  },

  delete: async (id) => {
    await pool.query("DELETE FROM calls WHERE id = ?", [id]);
  }
};

export default Call;
