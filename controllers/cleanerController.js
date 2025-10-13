// backend/controllers/cleanerController.js
import Cleaner from "../models/Cleaner.js";

const cleanerController = {
  getCleaner: async (req, res) => {
    try {
      const cleaner = await Cleaner.getAll();
      res.json({ data: cleaner });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createCleaner: async (req, res) => {
    try {
      const cleaner = await Cleaner.create(req.body);
      res.json({ data: cleaner });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateCleaner: async (req, res) => {
    try {
      const updatedCleaner = await Cleaner.update(req.params.id, req.body);
      res.json({ success: true, data: updatedCleaner });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteCleaner: async (req, res) => {
    try {
      await Cleaner.delete(req.params.id);
      res.json({ message: "cleaner  deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default cleanerController;
