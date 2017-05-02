var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// app.use(bodyParser.json(urlncoded({extended: false}));

var email = "foo";
var password = "bar";

app.get('/', function(req,res){
  res.send({confirm: 'the server is working'})
});

app.post('/login', function(req, res) {
  var checkUsername = req.body.email == email ? email : 'Wrong email';
  var checkPassword = req.body.password == password ? password : 'Wrong password';
  res.json({
    email: checkUsername,
    password: checkPassword,
    userid: 'ABC321'
  });
});

app.use('*', function(req, res) {
  res.status(404).json({
    message: 'Not Found'
  })
});

app.listen(process.env.PORT || 8080, process.env.IP);