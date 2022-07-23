import { Router } from "express";
import { register, login, getMe, getAll } from "../controllers/AuthController.js";
const router = new Router();

// all users
// http://loccalhost:5000/auth
router.get("/", getAll)

// Register
// http://localhost:5000/auth/register
router.post("/register", register);

//Login
// http://localhost:5000/auth/login
router.post("/login", login);

// Me
// http://localhost:5000/auth/me
router.post("/me", getMe);

export default router;
