import { Router } from "express";
const router = new Router();
import { checkAuth } from "../utils/checkAuth.js";
import { createComment } from "../controllers/CommentsController.js";

// Create Comment
// http://localhost:5000/api/comment/:id
router.post("/:id", checkAuth, createComment);

export default router;
