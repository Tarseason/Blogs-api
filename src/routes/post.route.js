const express = require('express');
const jwt = require('../middlewares/jwt');
const postControl = require('../controllers/post.controllers');

const router = express.Router();

router.use('/', jwt, postControl.getAll);

module.exports = router;