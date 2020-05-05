var express = require('express');
var router = express.Router();
var User = require('../lib/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/register', function (req, res) {
  var username = req.body.username;
  var passwd = req.body.password;
  var email = req.body.email;
});
module.exports = router;
