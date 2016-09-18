var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('photoChange', {data:
  // 								["去红","去绿","去蓝","灰度","黑白","反色","模糊"]
  // 			});
  res.render('index',{title:'首页'});
});
 
module.exports = router;
