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
router.post('/register', function (req, res) {
  var email = req.body.email;
  var reemail = req.body.reemail;
  var username = req.body.username;
  var passwd = req.body.passwd;
  var repasswd = req.body.passwd;
  if (email.toString() == reemail.toString() && passwd.toString() == repasswd.toString()){
    var usuario = new User({email: email, username: username, password: passwd})
    usuario.save(function (err, user) {
      if (err) return console.error(err);
      console.log(user.username + "guardado");
    })
  }else{
    console.log('No funciona');
  }
});
module.exports = router;
