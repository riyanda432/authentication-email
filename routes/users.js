const express = require('express');
const router = require('express-promise-router')(); 
const userController = require('../controller/users');

router.route('/signup')
    .post(userController.signUp);

router.route('/signin')
    .post(userController.signIn);

router.route('/secret')
    .get(userController.secret);

module.exports = router;
