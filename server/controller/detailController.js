const util = require('../modules/util');
const rm = require('../modules/responseMessage');
const sc = require('../modules/statusCode');
const { Detail } = require('../models');
const { Op } = require('sequelize');

module.exports = {
    readDetail: async (req, res) => {
        try {
            const data = await Detail.findOne({
                attributes: ['thumbnailImageUrl', 'num', 'title']
            });
            return res.status(sc.OK).send(ut.success(sc.OK, 'get list success', data));
            
        } catch(err){
            console.error(err);
        }
    },
}
