import productRoutes from "./product.routes.js";
import userRoutes from "./user.routes.js";
import { Router } from "express";

const allRoutes = Router();

allRoutes.use("/products", productRoutes);
allRoutes.use("/users", userRoutes);

export default allRoutes;