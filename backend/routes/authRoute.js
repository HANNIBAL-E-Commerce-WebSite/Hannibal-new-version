
const express = require('express');
const router = express.Router();


const login = require('../controllers/authController');
const userController = require('../controllers/userController.js');

router.post('/login', login.loginUser);
router.post('/register', userController.createUser);
router.post('/pass', login.checkPass);

module.exports = router;
