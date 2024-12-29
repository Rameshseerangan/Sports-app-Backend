import express from "express";
import { createPost, getPostsBySport } from "../Controllers/PostControllers.js";
import { adminMiddleware, authMiddleware } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/create",authMiddleware,createPost)
router.get("/sports/:sports", getPostsBySport);
router.get('/search', getPostsBySport);

export default router;