const { Webtoon } = require('../models');
const ut = require('../modules/util');
const sc = require('../modules/statusCode');

module.exports = {
    readTop: async (req, res) => {
        try {
            const data = await Webtoon.findOne({
                attributes: ['thumbnailImageUrl', 'title', 'author']
            });
            return res.status(sc.OK).send(ut.success(sc.OK, 'get top success', data));
            
        } catch(err){
            console.error(err);
        }
    },
    readList: async (req, res) => {
        try{
            const data = await Webtoon.findOne({
                attributes: ['image', 'supTitle', 'subTitle']
            });
            return res.status(sc.OK).send(ut.success(sc.OK, 'get list success', data));
        } catch(err) {
            console.error(err);
        }
    }
};