// routes/consommationRoutes.js
import express from "express";
import consomController from "../controllers/consomController.js";

const router = express.Router();

router.get("/", consomController.getConsommations);
router.post("/", consomController.createConsommation);
router.put("/:id", consomController.updateConsommation); // tu utilises UPDATE pour update (comme dans tes autres routes)
router.delete("/:id", consomController.deleteConsommation);

export default router;
