var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) { 
  var userName = req.query.txtUserName;
  var userPwd = req.query.txtUserPwd;
  var userName2 = req.param('txtUserName');
  var userPwd2 = req.param('txtUserPwd');
  var dataArr=[];

  typeof userName == "undefined"?null:dataArr.push('req.query用户名:'+userName);
  typeof userPwd == "undefined"?null:dataArr.push('req.query密码:'+userPwd);
  typeof userName2 == "undefined"?null:dataArr.push('req.param用户名:'+userName2);
  typeof userPwd2 == "undefined"?null:dataArr.push('req.param密码:'+userPwd2);

  console.log('req.query用户名:'+userName);
  console.log('req.query密码:'+userPwd);
  console.log('req.param用户名:'+userName2);
  console.log('req.param密码:'+userPwd2);

  res.render('subform', { title: '提交表单及接收参数示例' ,
							userInfoGet:dataArr.length,
							data:dataArr
						}
			);
});

router.post('/', function(req, res) { 
  var userName = req.body.txtUserName;
  var userPwd = req.body.txtUserPwd;
  var userName2 = req.param('txtUserName');
  var userPwd2 = req.param('txtUserPwd');
  var dataArr=[];

  typeof userName == "undefined"?null:dataArr.push('req.body用户名:'+userName);
  typeof userPwd == "undefined"?null:dataArr.push('req.body密码:'+userPwd);
  typeof userName2 == "undefined"?null:dataArr.push('req.param用户名:'+userName2);
  typeof userPwd2 == "undefined"?null:dataArr.push('req.param密码:'+userPwd2);

  console.log('req.body用户名:'+userName);
  console.log('req.body密码:'+userPwd);
  console.log('req.param用户名:'+userName2);
  console.log('req.param密码:'+userPwd2);

  res.render('subform', { title: '提交表单及接收参数示例' ,
							userInfoPost:dataArr.length,
							data:dataArr
						}
			);
});

module.exports = router;