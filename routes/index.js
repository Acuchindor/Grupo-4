var express = require('express');
var router = express.Router();
var path = require('path');
var User = require('../lib/User');
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/MONGOL", {
  "auth": { "authSource": "MONGOL" },
  "user": "Admin",
  "pass": "Almi123",
  "useMongoClient": true
});
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
      var usuario = new User({email: email, username: username, password: passwd});
      usuario.save(function (err) {
        if (err) res.send('¡Ese usuario o email ya esta registrado!');
        else res.send('¡Has sido registrado!');
        res.end();
      });
  }else{
    res.send('¡El email o la password no coinciden!');
    res.end();
  }
});
module.exports = router;