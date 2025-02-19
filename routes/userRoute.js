const express = require('express');
const userRouter = express.Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getSingleUser);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter;
