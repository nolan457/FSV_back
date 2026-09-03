import { generateId } from "../utils/generateID.js";

let users = [
    { id: 1, name: "John Doe",  age: 30, email: "john.doe@example.com", country: "United States" },
    { id: 2, name: "Jane Smith",  age: 25, email: "jane.smith@example.com", country: "Argentina" },
    { id: 3, name: "Alice Johnson",  age: 35, email: "alice.johnson@example.com", country: "Paraguay" }
];

const getServiceAllUsers = () => {
    return users;
};

const createServiceUser = (userData) => {
    const country = typeof userData.country === "string" && userData.country.trim()
        ? userData.country.trim()
        : "Desconocido";
    const newUser = { id: generateId(users), ...userData, country };
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