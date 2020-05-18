var express = require('express');
var ejs = require('ejs');
var router = express.Router();
var User = require('../lib/User');
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Mikel:Almi123@losgansos-lnodt.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
mongoose.connect("mongodb+srv://Mikel:Almi123@losgansos-lnodt.mongodb.net/test?retryWrites=true&w=majority");
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
  User.exists({username: username, password: passwd}, function(err, result){
    if (result){
      res.render('../public/index.ejs', { error: username });
    }else{
      res.render('../public/login.ejs',{error:'Usuario o contraseña equivocados.'});
    }
  });
});
module.exports = router;