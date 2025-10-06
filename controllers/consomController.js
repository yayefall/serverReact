// controllers/consommationController.js
import Consommation from "../models/consommation.js";

// Récupérer toutes les consommations
const consomController ={

 getConsommations : async (req, res) => {
  try {
    const consommations = await Consommation.getAll();
    res.json({ success: true, data: consommations });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Erreur serveur" });
  }
},

// Ajouter une consommation
  createConsommation : async (req, res) => {
  try {
    const newConsommation = await Consommation.create(req.body);
    res.json({ success: true, data: newConsommation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Impossible d'ajouter" });
  }
},

// Mettre à jour une consommation
  updateConsommation : async (req, res) => {
  try {
    const { id } = req.params;
    const updatedConsommation = await Consommation.update(id, req.body);
    res.json({ success: true, data: updatedConsommation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Impossible de modifier" });
  }
},

// Supprimer une consommation
 deleteConsommation : async (req, res) => {
  try {
    const { id } = req.params;
    await Consommation.delete(id);
    res.json({ success: true, message: "Consommation supprimée" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Impossible de supprimer" });
  }
}
};

export default consomController