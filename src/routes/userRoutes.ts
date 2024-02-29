import express from "express";

import userController from "../controllers/userControllers";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateUserRequest } from "../middleware/validation";

const router = express.Router();

router.get("/getUser", jwtCheck, jwtParse, userController.getCurrentUser);
router.post("/create", jwtCheck, userController.createUser);
router.put("/update", jwtCheck, jwtParse, validateUserRequest, userController.updateUser);

export default router;
