var express = require('express');
var router = express.Router();

router.use('/main', require('./main'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
