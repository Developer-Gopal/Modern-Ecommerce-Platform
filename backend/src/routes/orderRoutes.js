import express from "express";
import * as orderController from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.post("/", protect, orderController.createOrder);

router.get("/my", protect, orderController.getMyOrders);

router.get("/", protect, isAdmin, orderController.getAllOrders);

router.put("/:id", protect, isAdmin, orderController.updateOrderStatus);

router.delete("/:id", protect, isAdmin, orderController.deleteOrder);

export default router;