const express = require('express');
const {
    userCreate,
    userById,
    usersAll,
    userUpdate,
    userDelete,
    userGetEmail,
    userLogin,
} = require('../controllers/userController');
const { TokenMiddleware } = require('../middleware/TokenMiddleware');

const UserRouter = express
    .Router()
    .post('/user', userCreate)
    .get('/user/:id', TokenMiddleware, userById)
    .post('/login', userLogin)
    .get('/userget/:email', userGetEmail)
    .get('/users', usersAll)
    .patch('/user/:id', TokenMiddleware, userUpdate)
    .delete('/user/:id', TokenMiddleware, userDelete);

module.exports = UserRouter;
