// backend/controllers/callController.js
import Call from "../models/Call.js";

const callController = {
  getCalls: async (req, res) => {
    try {
      const calls = await Call.getAll();
      res.json({ data: calls });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createCall: async (req, res) => {
    try {
      const call = await Call.create(req.body);
      res.json({ data: call });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateCall: async (req, res) => {
    try {
      const call = await Call.update(req.params.id, req.body);
      res.json({ data: call });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteCall: async (req, res) => {
    try {
      await Call.delete(req.params.id);
      res.json({ message: "Call deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default callController;
