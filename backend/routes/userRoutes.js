const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

router.get('/',userController.getAllUsers)
router.get('/:id',userController.getUserById)

router.put('/:id', userController.updateUserById);
router.delete('/:id', userController.deleteUserById);

module.exports = router;