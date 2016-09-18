var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: 'Express' });
  // res.render('index2', { title: 'Express2' ,
  // 						week:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
  // 					});
  next();
});

module.exports = router;
 