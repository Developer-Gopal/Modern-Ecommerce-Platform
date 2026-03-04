import express from "express";
import * as productController from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { isAdmin } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get("/", productController.getProducts);

router.post("/", protect, isAdmin, productController.createProduct);

router.delete("/:id", protect, isAdmin, productController.deleteProduct);

export default router;
