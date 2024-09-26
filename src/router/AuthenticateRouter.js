module.exports = authenticate => {
    const {usersController} = require('../controllers/index');
    const express = require('express');

    const router = express.Router();

    router.post('/', usersController.createUser);

    authenticate.use('/api/authenticate', router);
}