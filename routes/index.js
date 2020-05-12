var express = require('express');
var ejs = require('ejs');
var router = express.Router();
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
  res.render('../public/index.ejs', { error: 'LOGIN' });
});
router.get('/register', function (req, res) {
  res.render('../public/registro.ejs',{error:''});
});
router.get('/login', function (req, res) {
  res.render('../public/login.ejs',{error:''});
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
        if (err) res.render('../public/registro.ejs', {error: 'Imbecil!'});
        else res.render('../public/registro.ejs', {error: '¡Has sido registrado!'});
      });
  }else{
    res.render('../public/registro.ejs',{ error: '¡El email o la password no coinciden!'});
  }
});
router.post('/login', function (req, res) {
  var username = req.body.username;
  var passwd = req.body.passwd;
  mongoose.usuarios.exists({username: username, password: passwd}, function(err, result){
    if (err){
      res.render('../public/login.ejs',{error:'Usuario o contraseña equivocados.'});
    }else{
      res.render('../public/index.ejs', { error: username });
    }
  });
});
module.exports = router;