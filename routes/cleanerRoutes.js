import express from "express";
import cleanerController from"../controllers/cleanerController.js";

const router = express.Router();

router.get("/", cleanerController.getCleaner);
router.post("/", cleanerController.createCleaner);
router.put("/:id", cleanerController.updateCleaner);
router.delete("/:id", cleanerController.deleteCleaner);

export default router;
