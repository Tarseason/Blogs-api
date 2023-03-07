const express = require('express');
const userController = require('../controllers/user.controller');
const jwt = require('../middlewares/jwt');

const router = express.Router();

router.get('/', jwt, userController.getAll);
router.get('/:id', jwt, userController.getById);

module.exports = router;