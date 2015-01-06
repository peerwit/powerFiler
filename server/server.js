// Server File Endpoint for powerFiler project
// Authors Pranay and Daniel Tsui

var express = require('express'); // express -> function
var app = express(); // invoke
var path = require('path'); // -> object
var multer = require('multer');

app.use('/', express.static(path.resolve(__dirname + '/../client')));

app.use('/static', express.static(path.resolve(__dirname + '/../client')));
app.get('/', function(req, res) {
  res.sendfile(path.resolve(__dirname + '/../client/index.html'));
});
app.get('/downloads/:id', function(req, res) {
  res.sendfile(path.resolve(__dirname + '/../client/index.html'));
});

app.post('/uploads/:id' , function(req,res){
  var id = req.param('id');
})

app.listen(3000);
