import express from "express";

import { jwtCheck, jwtParse } from "../middleware/auth";
import orderControllers from "../controllers/orderControllers";

const router = express.Router();

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  orderControllers.createCheckoutSession
);

router.post("/checkout/webhook", orderControllers.stripeWebhookHandler);

export default router;
