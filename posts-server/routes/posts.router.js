import { Router } from "express";
import { createPost, getAll, getById } from "../controllers/PostsController.js";
import { checkAuth } from "../utils/checkAuth.js";
const router = new Router();

// Create Post
// http://localhost:5000/api/posts
router.post('/', checkAuth, createPost)

// Get All Posts
// http://localhost:5000/api/posts
router.get('/', getAll)

// Get Post By Id
// http://localhost:5000/api/posts/:id
router.get('/:id', getById)



export default router;
