import express from "express";
import {
   getUsers,
   getUser,
   updateUser,
   deleteUser,
} from "../controllers/user.controller";
import { TokenValidation } from "../middlewares/verifyToken";

const router = express.Router();

//? Create user
router.get("", getUsers);
//? http://localhost:8080/api/v1/users
router.get("/:userId", TokenValidation, getUser);
router.put("/:userId", TokenValidation, updateUser);
router.delete("/:userId", deleteUser);

export default router;
