var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,
						data:["学习笔记一","学习笔记二","学习笔记三"]});
});
 
module.exports = router;
