'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var fileUpload = require('express-fileupload')

// require and use "multer"...


var app = express();
app.use(bodyParser()) // for POST
app.use(fileUpload())
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', function(req, res){
  res.json({"name": req.files.upfile.name, "size": req.files.upfile.data.length + " bytes"});  
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
