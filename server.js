var express = require('express');
var app = express();




var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('node_modules'));




app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
});

//start the server
app.listen(process.env.PORT || '8000');