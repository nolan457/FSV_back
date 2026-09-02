import { generateId } from "../utils/generateID.js";

let users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" }
];

const getServiceAllUsers = () => {
    return users;
};

const createServiceUser = (userData) => {
    const newUser = { id: generateId(users), ...userData };
    users.push(newUser);
    return newUser;
};

const getServiceUserById = (userId) => {
    return users.find(user => user.id === parseInt(userId));
};

const updateServiceUser = (userId, userData) => {
    const userIndex = users.findIndex(user => user.id === parseInt(userId));
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...userData };
        return users[userIndex];
    }
    return null;
};

const deleteServiceUser = (userId) => {
    const userIndex = users.findIndex(user => user.id === parseInt(userId));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        return true;
    }
    return false;
};

export { getServiceAllUsers, createServiceUser, getServiceUserById, updateServiceUser, deleteServiceUser };