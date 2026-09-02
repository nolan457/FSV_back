import { Router } from "express";
import * as userController from "../controllers/user.controller.js";

const routerUser = Router();

routerUser.get("/test", (req, res) => {
    res.json({ message: "Ruta de prueba de usuarios" });
});

routerUser.get("/", userController.getAllUsers);
routerUser.post("/", userController.createUser);
routerUser.get("/:id", userController.getUserById);
routerUser.put("/:id", userController.updateUser);
routerUser.delete("/:id", userController.deleteUser);

export default routerUser;