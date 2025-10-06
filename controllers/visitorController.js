// backend/controllers/visitorController.js
import Visitor from "../models/ Visitor.js";

const visitorController = {
  getVisitors: async (req, res) => {
  try {
    const visitors = await Visitor.getAll();
    res.json({ data: visitors });
  } catch (err) {
    console.error("Erreur getVisitors:", err);   // 👈 Ajout pour voir dans le terminal
    res.status(500).json({ error: err.message });
  }
},


  createVisitor: async (req, res) => {
    try {
      const visitor = await Visitor.create(req.body);
      res.json({ data: visitor });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateVisitor: async (req, res) => {
    try {
      const visitor = await Visitor.update(req.params.id, req.body);
      res.json({ data: visitor });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteVisitor: async (req, res) => {
    try {
      await Visitor.delete(req.params.id);
      res.json({ message: "Visitor deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default visitorController;
