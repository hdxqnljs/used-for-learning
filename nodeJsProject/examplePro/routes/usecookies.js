var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	var data="",
		dt=null,
		str="";
	if(req.cookies.time){
		data="上次访问时间是   "+req.cookies.time;
	}else{
		dt=new Date();
		str=dt.getMinutes()+"分 ";
		str=str+dt.getSeconds()+"秒";
		res.cookie('time',str,{maxAge:10000});
		data="没有cookie";
	}
  //res.clearCookie('time');
  res.render('usecookies', { 
  							title: '使用cookies示例',
  							data:data
  						 });
});

module.exports = router;