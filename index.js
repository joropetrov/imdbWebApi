var express = require("express");
var request = require("request");
var app = express();
app.use(express.static("lib"));
app.set("view engine", "ejs");
 
var bodyParser = require("body-parser");
const { response } = require("express");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: false}));
app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});

let imdbiSearchMovieByNamePath = "https://www.omdbapi.com/?s=inception&apikey=ab666ed2";

app.get("/", function(request, response){
    response.render("page");
});
 //tt3896198&apikey=ab666ed2
app.get("/resultsByName", function(req, res){ 
  request(imdbiSearchMovieByNamePath, 
      function(error, response, body){
          if(!error && response.statusCode == 200){
            
              var data = JSON.parse(body);
              res.render("resultsByName", {data: data});
              
          }
  });
});

app.post("/", (req, res) =>{
  const {name} = req.body;
  const {year} = req.body;
     if (name) {
      return res.status(200).send(`welcome ${name}`);
     } else if (year) {
      return res.status(200).send(`years ${year}`);
     }
    
  
})

app.get("/results", function(req, res){ 
  request(imdbiSearchMovieByNamePath, 
      function(error, response, body){
          if(!error && response.statusCode == 200){
           
              var data = JSON.parse(body);
              res.render("results", {data: data});
          }
  });
});
 
app.get("*", function(request, response){
  response.render("error");
});
