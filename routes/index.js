var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function (req, res) {
  res.sendFile(path.join('C:/Users/crist/Desktop/untitled/public/registro.html'));
});
module.exports = router;
