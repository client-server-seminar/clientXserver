const express = require('express');
const router = express.Router();
const mainController = require('../../controller/maincontroller');

/* [GET] localhost: 3000/posts */
router.get('/top', mainController.readTop);
router.get('/list', mainController.readList);

module.exports = router;