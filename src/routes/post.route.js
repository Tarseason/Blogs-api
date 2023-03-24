const express = require('express');
const jwt = require('../middlewares/jwt');
const postControl = require('../controllers/post.controllers');

const router = express.Router();

router.get('/', jwt, postControl.getAll);
router.get('/:id', jwt, postControl.getById);
router.put('/:id', jwt, postControl.update);

module.exports = router;