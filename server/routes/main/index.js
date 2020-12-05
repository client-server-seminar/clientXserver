const express = require('express');
const router = express.Router();

/* [GET] localhost: 3000/posts */
router.get('/top', mainController.readTop);
router.get('/:day', mainController.readDay);