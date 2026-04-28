import { Router } from "express";
import { validateCardController } from "../controllers/cardController";

const router = Router();

// POST /api/cards/validate
router.post("/validate", validateCardController);

export default router;