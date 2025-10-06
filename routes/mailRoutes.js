import express from "express";
import mailController from "../controllers/ mailController.js";

const router = express.Router();

router.get("/", mailController.getMail);
router.post("/", mailController.createMail);
router.put("/:id", mailController.updateMail);
router.delete("/:id", mailController.deleteMail);

export default router;


