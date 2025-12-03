import { register, login, logout } from "../controllers/user.controllers.js";
import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;