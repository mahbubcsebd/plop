const user = require('../models/userModel');

// Get All users
const getAllUsers = async (req, res) => {
res.status(200).json({ message: 'Get all users' });
};

// Get Single user
const getSingleUser = async (req, res) => {
res.status(200).json({ message: 'Get single user' });
};

// Create user
const createUser = async (req, res) => {
res.status(201).json({ message: 'Create user' });
};

// Update user
const updateUser = async (req, res) => {
res.status(200).json({ message: 'Update user' });
};

// Delete user
const deleteUser = async (req, res) => {
res.status(200).json({ message: 'Delete user' });
};

module.exports = {
getAllUsers,
getSingleUser,
createUser,
updateUser,
deleteUser,
};