// backend/controllers/callController.js
import Partenaire from "../models/Partenaire.js";

const partController = {
  getParts: async (req, res) => {
    try {
      const part = await Partenaire.getAll();
      res.json({ data: part });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createPart: async (req, res) => {
    try {
      const part = await Partenaire.create(req.body);
      res.json({ data: part });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updatePart: async (req, res) => {
    try {
      const part = await Partenaire.update(req.params.id, req.body);
      res.json({ data: part });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deletePart: async (req, res) => {
    try {
      await Partenaire.delete(req.params.id);
      res.json({ message: "Partenaire deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default partController;
