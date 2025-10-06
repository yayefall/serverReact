import express from "express";
import callController from"../controllers/callController.js";

const router = express.Router();

router.get("/", callController.getCalls);
router.post("/", callController.createCall);
router.put("/:id", callController.updateCall);
router.delete("/:id", callController.deleteCall);

export default router;


