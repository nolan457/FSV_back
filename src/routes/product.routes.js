import { Router } from "express";
import { createProduct, deleteProduct, getProductById, listProducts, updateProduct, } from "../controllers/product.controller.js";
import { validateId, validateUser,  checkValidation } from "../validations/user.validate.js";

const productRoutes = Router();

productRoutes.get("/", listProducts);
productRoutes.get("/:id", getProductById);
productRoutes.post("/", createProduct);
productRoutes.put("/:id", updateProduct);
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;

