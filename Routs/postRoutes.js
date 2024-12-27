import express from "express";
import { createPost} from "../Controllers/PostControllers.js";
import { adminMiddleware, authMiddleware } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/create",authMiddleware,createPost)

export default router;