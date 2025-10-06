// models/Task.js
import pool from "../config/db.js";

const Task = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM tasks");
    return rows;
  },

  create: async (data) => {
    const { title, due_date, done } = data;
    const [result] = await pool.query(
      "INSERT INTO tasks (title, due_date, done) VALUES (?, ?, ?)",
      [title, due_date, done || false]
    );
    return { id: result.insertId, title, due_date, done: done || false };
  },

  update: async (id, data) => {
    const { title, due_date, done } = data;
    await pool.query(
      "UPDATE tasks SET title = ?, due_date = ?, done = ? WHERE id = ?",
      [title, due_date, done || false, id]
    );
    return { id, title, due_date, done: done || false };
  },

  delete: async (id) => {
    await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
  }
};

export default Task;
