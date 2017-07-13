var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// app.use(bodyParser.json(urlncoded({extended: false}));

var runs = [
  {
    date: 'July 13, 2017',
    name: 'The Deck',
    address: '401 S Columbus Blvd',
    lat: 39.941598,
    lng: -75.141249
  },
  {
    date: 'July 20, 2017',
    name: 'Veterans Boxing Association',
    address: '2733 E Clearfield St',
    lat: 39.982194,
    lng: -75.104085
  },
  {
    date: 'July 27, 2017',
    name: 'Evil Genius',
    address: '1727 N Front Street',
    lat: 39.975714,
    lng: -75.134163
  },
  {
    date: 'August 3, 2017',
    name: 'The Oval',
    address: '2451 Benjamin Franklin Pkwy',
    lat: 39.963285,
    lng: -75.177137
  }
]

app.get('/', function(req,res){
  res.send({confirm: 'the server is working'})
});

app.get('/runs', function(req, res){
  res.status(200).json(runs)
})


app.use('*', function(req, res) {
  res.status(404).json({
    message: 'Not Found'
  })
});

app.listen(process.env.PORT || 8080, process.env.IP);

  // {
  //   date: 'July 13, 2017',
  //   name: 'The Moshulu',
  //   address: '401 S Columbus Blvd',
  //   lat: 39.941598,
  //   lng: -75.141249
  // }pin
