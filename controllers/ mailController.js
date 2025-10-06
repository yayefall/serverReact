// backend/controllers/mailController.js
import MailItem from "../models/MailItem.js";

const mailController = {
  getMail: async (req, res) => {
    try {
      const mail = await MailItem.getAll();
      res.json({ data: mail });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createMail: async (req, res) => {
    try {
      const mail = await MailItem.create(req.body);
      res.json({ data: mail });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateMail: async (req, res) => {
    try {
      const mail = await MailItem.update(req.params.id, req.body);
      res.json({ data: mail });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteMail: async (req, res) => {
    try {
      await MailItem.delete(req.params.id);
      res.json({ message: "Mail item deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default mailController;
