//jshint esversion:6
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/bmiCalculator",function(req,res){
  var ht = parseFloat(req.body.ht);
  var wt = parseFloat(req.body.wt);
  var ans = wt/(ht*ht);
  res.send("Your BMI is: "+ans);
});
app.listen(3000,function(){
  console.log("3000 port is active.");
});
