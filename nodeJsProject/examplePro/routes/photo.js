var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('photoChange', { title: '照片' ,
  							  data:["去红","去绿","去蓝","灰度","黑白","反色","模糊"],
});
});

module.exports = router;