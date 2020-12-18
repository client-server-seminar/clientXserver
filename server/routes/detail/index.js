const express = require('express');
const router = express.Router();
const detailController = require('../../controller/detailController');
// const upload = require('../../modules/multer');

router.get('/', detailController.readDetail);
// router.get('/', postController.readAllPost);
// router.post('/:postId/like', postController.createLike);
// router.delete('/:postId/like', postController.deleteLike);

module.exports = router;