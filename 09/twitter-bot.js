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

function sendPokemon(request,response){
  var data = request.params;
  var reply = "pikachu is the best";
  console.log(data);
  response.send(reply);
}

app.get('/search/pikachu/25',sendPokemon);
