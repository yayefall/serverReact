// backend/controllers/appointmentController.js
import Appointment from "../models/Appointment.js";

const appointmentController = {
  getAppointments: async (req, res) => {
    try {
      const appts = await Appointment.getAll();
      res.json({ data: appts });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createAppointment: async (req, res) => {
    try {
      const appt = await Appointment.create(req.body);
      res.json({ data: appt });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateAppointment: async (req, res) => {
    try {
      const appt = await Appointment.update(req.params.id, req.body);
      res.json({ data: appt });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  deleteAppointment: async (req, res) => {
    try {
      await Appointment.delete(req.params.id);
      res.json({ message: "Appointment deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default appointmentController;
