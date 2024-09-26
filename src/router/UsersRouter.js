module.exports = users => {
    const {usersController} = require('../controllers/index');
    const express = require('express');

    const router = express.Router();

    router.post('/', usersController.createUser);
    router.get('/:id', usersController.getUserById);
    router.get('/', usersController.getAllUsers);
    router.put('/:id', usersController.updateUser);
    router.delete('/:id', usersController.deleteUser);

    users.use('/api/users', router);
}