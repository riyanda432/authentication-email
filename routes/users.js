const express = require('express');
const router = require('express-promise-router')(); 
const userController = require('../controller/users');
const {validation, schema} = require('../helpers/routerHelper');

router.route('/signup')
    .post(validation(schema), userController.signUp);

router.route('/signin')
    .post(userController.signIn);

router.route('/secret')
    .get(userController.secret);

module.exports = router;
