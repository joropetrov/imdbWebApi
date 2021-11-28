var express = require("express");
var app = express();
app.use(express.static("lib"));

app.set("view engine", "ejs");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var request = require("request");

app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });