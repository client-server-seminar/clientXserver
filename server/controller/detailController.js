const util = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const { Detail } = require('../models');
const { Op } = require('sequelize');

module.exports = {
    readDetail: async (req, res) => {
        try {
            const post = await Post.create({ UserId: userId, title, contents, postImageUrl: image });
            return res.status(sc.OK).send(util.success(sc.OK, rm.CREATE_POST_SUCCESS, post));
        } catch(err) {
            console.error(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(util.fail(sc.INTERNAL_SERVER_ERROR, rm.CREATE_POST_FAIL));
        }
    },
}
