import * as userService from "../services/user.service.js";

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getServiceAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await userService.createServiceUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await userService.getServiceUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await userService.updateServiceUser(userId, userData);
        if (!updatedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userService.deleteServiceUser(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        next(error);
    }
};

export { getAllUsers, createUser, getUserById, updateUser, deleteUser };