const express = require('express');
const login = require('../controllers/login');
const register = require('../controllers/register');
const router = new express.Router();

// ROUTER TO CREATE A USER

router.post('/users', register)

// ROUTER TO LOGIN A USER

router.post('/users/login', login)

module.exports = router