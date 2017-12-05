var Twit = require('twit');

console.log('init');

for(var i=5;i>0;i--){
    console.log(i);
}

var fs = require('fs');

var contents = fs.readFileSync('config.json');

var jsonContent = JSON.parse(contents);

console.log(jsonContent.consumer_key);

var T = new Twit();
