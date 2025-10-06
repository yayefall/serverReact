// models/Appointment.js
import pool from "../config/db.js";

const Appointment = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM appointments");
    return rows;
  },

  create: async (data) => {
    const { title, with_person, location, start_time, end_time, notes } = data;
    const [result] = await pool.query(
      "INSERT INTO appointments (title, with_person, location, start_time, end_time, notes) VALUES (?, ?, ?, ?, ?, ?)",
      [title, with_person, location, start_time, end_time, notes]
    );
    return { id: result.insertId, title, with_person, location, start_time, end_time, notes };
  },

  update: async (id, data) => {
    const { title, with_person, location, start_time, end_time, notes } = data;
    await pool.query(
      "UPDATE appointments SET title = ?, with_person = ?, location = ?, start_time = ?, end_time = ?, notes = ? WHERE id = ?",
      [title, with_person, location, start_time, end_time, notes, id]
    );
    return { id, title, with_person, location, start_time, end_time, notes };
  },

  delete: async (id) => {
    await pool.query("DELETE FROM appointments WHERE id = ?", [id]);
  }
};

export default Appointment;
