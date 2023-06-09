const express = require('express');
const jwt = require('../middlewares/jwt');
const categoriesControl = require('../controllers/category.controllers');

const router = express.Router();

router.get('/', jwt, categoriesControl.getAll);
router.post('/', jwt, categoriesControl.insert);

module.exports = router;