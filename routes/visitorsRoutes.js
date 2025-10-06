// routes/visitorRoutes.js
import express from "express";
import visitorController from "../controllers/visitorController.js";

const router = express.Router();

router.get("/", visitorController.getVisitors);
router.post("/", visitorController.createVisitor);
router.put("/:id", visitorController.updateVisitor);
router.delete("/:id", visitorController.deleteVisitor);

export default router;
