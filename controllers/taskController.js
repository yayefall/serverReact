// backend/controllers/taskController.js
import Task from "../models/Task.js";

const taskController = {
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.getAll();
      res.json({ data: tasks });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createTask: async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.json({ data: task });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateTask: async (req, res) => {
    try {
      const task = await Task.update(req.params.id, req.body);
      res.json({ data: task });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteTask: async (req, res) => {
    try {
      await Task.delete(req.params.id);
      res.json({ message: "Task deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default taskController;
