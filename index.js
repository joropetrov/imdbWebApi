var express = require("express");
var request = require("request");
var app = express();
// Need to tell ejs about the library volder
app.use(express.static("lib"));
 
     
app.set("view engine", "ejs");
 
var bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.urlencoded({extended: true}));
 
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});
 
app.get("/", function(request, response){
    response.render("page");
});
 //tt3896198&apikey=ab666ed2
app.get("/results", function(req, res){ 
  request("https://www.omdbapi.com/?t=33&apikey=ab666ed2", 
      function(error, response, body){
        console.log(error, response , body)
          if(!error && response.statusCode == 200){
              // res.send(body); < what we had before
              var data = JSON.parse(body);
              res.render("results", {data: data});
          }
  });
});
// app.get("/results", function(request, response){ 
//   response.render("results");
// });
 
app.get("*", function(request, response){
  response.render("error");
});