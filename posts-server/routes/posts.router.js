import { Router } from "express";
import { createPost } from "../controllers/PostsController.js";
import { checkAuth } from "../utils/checkAuth.js";
const router = new Router();

// Create Post
// http://localhost:5000/api/posts
router.post('/', checkAuth, createPost)


export default router;
