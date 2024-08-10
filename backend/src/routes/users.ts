import express, { Request, Response } from "express";
import * as authController from '../controllers/authController';
import { validateRegister } from "../middleware/validateMiddleware";

const router = express.Router();

router.post('/register', validateRegister, authController.register);
export default router;