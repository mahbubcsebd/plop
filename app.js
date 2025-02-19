const express = require('express');
const app = express();

const userRouter = require('./routes/userRoute');
// Plop will add new routes here

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRouter);
// Middleware & Routes

module.exports = app;
