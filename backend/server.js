import express from "express";
import authRoutes from "./src/routes/authRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import orderRoutes from "./src/routes/orderRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/order/",orderRoutes);

app.listen(5000, () => {
  console.log("Server running");
});