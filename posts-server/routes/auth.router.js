import { Router } from "express";
import { register, login, getMe, getAll } from "../controllers/AuthController.js";
import { checkAuth } from "../utils/checkAuth.js";
const router = new Router();

// Register
// http://localhost:5000/api/auth/register
// (`${API_URL}/api/auth/register`)
router.post('/register', register)

//Login
// http://localhost:5000/api/auth/login
router.post("/login", login);

// Me
// http://localhost:5000/api/auth/me
router.get("/me", checkAuth, getMe);

// all users
// http://loccalhost:5000/api/auth
router.get("/", getAll)

export default router;
