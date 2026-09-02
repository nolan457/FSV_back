import userRoutes from "./user.routes.js";
import { Router } from "express";

const allRoutes = Router();

allRoutes.use("/users", userRoutes);

export default allRoutes;