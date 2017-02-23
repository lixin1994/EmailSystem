var http = require("http");
var path = require('path');
var express = require('express')
var app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'dict')));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('home', { title: 'Express' });
})

app.listen(3000);
