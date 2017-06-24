var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// app.use(bodyParser.json(urlncoded({extended: false}));

var runs = [
  {
    date: 'June 29',
    name: `Morgan's Pier`,
    address: '221 N Christopher Columbus Blvd',
    lat: 39.955033,
    lng: -75.138913
  }
]

app.get('/', function(req,res){
  res.send({confirm: 'the server is working'})
});

app.get('/runs', function(req, res){
  res.status(200).json(runs[0])
})


app.use('*', function(req, res) {
  res.status(404).json({
    message: 'Not Found'
  })
});

app.listen(process.env.PORT || 8080, process.env.IP);