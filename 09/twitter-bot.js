var Twit = require('twit');
var fs = require('fs');
var express = require('express');

console.log('init');

var contents = fs.readFileSync("config.json");

var jsonContent = JSON.parse(contents);

console.log(jsonContent.consumer_key);

//var T = new Twit();

var app = express();

function listening(){
  console.log("listening");
}

var server = app.listen(3000, listening);

function sendPikachu(request,response){
  response.send("Pika");
}

app.get('/pikachu', sendPikachu);
