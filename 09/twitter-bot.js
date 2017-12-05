var Twit = require('twit');
var fs = require('fs');

console.log('init');

var contents = fs.readFileSync("config.json");

var jsonContent = JSON.parse(contents);

console.log(jsonContent.consumer_key);

//var T = new Twit();
