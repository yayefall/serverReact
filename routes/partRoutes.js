import express from "express";
import partController from"../controllers/partController.js";

const router = express.Router();

router.get("/", partController.getParts);
router.post("/", partController.createPart);
router.put("/:id", partController.updatePart);
router.delete("/:id", partController.deletePart);

export default router;


