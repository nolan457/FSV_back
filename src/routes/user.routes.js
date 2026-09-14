import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { checkValidation, validateId, validateUser } from "../validations/user.validate.js";

const userRoutes = Router();

userRoutes.get("/test", (req, res) => {
    res.json({ message: "Ruta de prueba de usuarios" });
});

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", checkValidation(validateId), userController.getUserById);
userRoutes.post("/", checkValidation(validateUser), userController.createUser);
userRoutes.put("/:id", checkValidation([validateId, validateUser]), userController.updateUser);
userRoutes.delete("/:id", checkValidation(validateId), userController.deleteUser);

export default userRoutes;