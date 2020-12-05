const { Webtoon } = require('../models');
const ut = require('../modules/util');
const sc = require('../modules/statusCode');

module.exports = {
    readTop: async (req, res) => {
        
    },
    readDay: async (req, res) => {
        try{
            const day = req.params.day; 
            const webtoons = await Webtoon.findAll({where: {day: day}});
            return res.status(sc.OK).send(ut.success(sc.OK, "요일별 게시물 조회 성공", webtoons));
        } catch(err) {
            console.log(err);
            return res.status(sc.INTERNAL_SERVER_ERROR).send(ut.fail(sc.INTERNAL_SERVER_ERROR, "요일 별 게시물 조회 실패"));
        }
    }
};