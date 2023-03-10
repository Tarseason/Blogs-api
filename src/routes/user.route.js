const express = require('express');
const userController = require('../controllers/user.controller');
const jwt = require('../middlewares/jwt');
const isEntries = require('../middlewares/isEntries');
const isNewUser = require('../middlewares/isNewUser');

const router = express.Router();

router.get('/', jwt, userController.getAll);
router.get('/:id', jwt, userController.getById);
router.post('/',
isEntries.isName,
isEntries.isEmail,
isEntries.isPassword,
// isNewUser,
userController.insert);

module.exports = router;