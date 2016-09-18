var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var data="";
	if(req.session.times){
		req.session.times<5?req.session.times=req.session.times+1:req.session.destroy();
	}else{
		req.session.times=1;
	}
	!!req.session?data="这是第"+req.session.times+"次访问。":null;
  res.render('usesession', { 
  						title: '使用session示例',
  						data:data });
});

module.exports = router;