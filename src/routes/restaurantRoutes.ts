import express from "express";
import multer from "multer";

import restaurantControllers from "../controllers/restaurantControllers";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateRestaurantRequest } from "../middleware/validation";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 5 * 1024 * 1024,
  },
});

router.get("/getRestaurant", jwtCheck, jwtParse, restaurantControllers.getRestaurant);

router.post(
  "/create",
  upload.single("imageFile"),
  validateRestaurantRequest,
  jwtCheck,
  jwtParse,
  restaurantControllers.createRestaurant
);

router.put(
  "/update",
  upload.single("imageFile"),
  validateRestaurantRequest,
  jwtCheck,
  jwtParse,
  restaurantControllers.updateRestaurant
);

export default router;
