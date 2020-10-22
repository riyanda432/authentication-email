const express = require('express');
const router = express.Router; 
const userController = require('../controller/users');

router.route('/sign-up')
    .post(userController.signUp);

router.route('/sign-in')
    .post(userController.signIn);

router.route('/secret')
    .post(userController.secret);

module.exports = router;
