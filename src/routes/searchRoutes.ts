import express from "express";
import { param } from "express-validator";
import searchControllers from "../controllers/searchControllers";

const router = express.Router();

router.get(
  "/search/:city",
  param("city").isString().trim().notEmpty().withMessage("City parameter must be a valid string"),
  searchControllers.searchRestaurants
);

export default router;
