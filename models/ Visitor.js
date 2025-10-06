// models/Visitor.js
import pool from "../config/db.js";

const Visitor = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM visitors");
    return rows;
  },

  create: async (data) => {
    const { full_name, company, purpose, host_department, departure_time = null } = data;
    const [result] = await pool.query(
      "INSERT INTO visitors (full_name, company, purpose, host_department, departure_time) VALUES (?, ?, ?, ?, ?)",
      [full_name, company, purpose, host_department, departure_time]
    );
    return { id: result.insertId, full_name, company, purpose, host_department, departure_time };
  },

  update: async (id, data) => {
    const { full_name, company, purpose, host_department, departure_time = null } = data;
    await pool.query(
      "UPDATE visitors SET full_name = ?, company = ?, purpose = ?, host_department = ?, departure_time = ? WHERE id = ?",
      [full_name, company, purpose, host_department, departure_time, id]
    );
    return { id, full_name, company, purpose, host_department, departure_time };
  },

  delete: async (id) => {
    await pool.query("DELETE FROM visitors WHERE id = ?", [id]);
  }
};

export default Visitor;
