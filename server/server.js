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
  express.static(path.resolve(__dirname + '/../client/' + req.param('id')));
});

app.use(multer({dest: './uploads/:id', rename: function(fieldname, filename) {
      console.log("Hellosfd ");
      console.log(this.originalname, filename);
    }
  })
)

// app.post('/uploads/:id', [multer({ dest: './uploads/'}), function(req, res){
//     console.log("Hello");
//     var id = req.param('id');
//     console.log(req.body) // form fields
//     console.log(req.files) // form files
//     res.status(204).end()
// }]);

app.get('/uploads/' , function(req,res){
  var id = req.param('id');
  res.end("Hello asf")
});

app.listen(3000);
