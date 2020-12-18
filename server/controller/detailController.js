const { Detail } = require('../models');
const ut = require('../modules/util');
const sc = require('../modules/statusCode');

module.exports = {
    readDetail: async (req, res) => {
        try {
            const data = await Detail.findAll({
                attributes: ['thumbnailImageUrl', 'num', 'title']
            });
            return res.status(sc.OK).send(ut.success(sc.OK, 'get list success', data));
            
        } catch(err){
            console.error(err);
        }
    },
}
