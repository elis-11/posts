import { Router } from "express";
import { createPost, getAll } from "../controllers/PostsController.js";
import { checkAuth } from "../utils/checkAuth.js";
const router = new Router();

// Create Post
// http://localhost:5000/api/posts
router.post('/', checkAuth, createPost)

// Get All Posts
// http://localhost:5000/api/posts
router.get('/', getAll)



export default router;
