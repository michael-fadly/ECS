var Twit = require('twit');
//var fs = require('fs');
var express = require('express');

var app = express();

function listening() {
    console.log("listening");
}

var server = app.listen(3000, listening);

var config = require("./config.js");
console.log('init');
var Twitter = new Twit(config);
var retweet = function () {
    var params = {
        q: "#nodejs, #Nodejs",
        result_type: "recent",
        lang: "en"
    }


Twitter.get('search/tweets', params, function (err, data) {
    if (!err) {
        var retweetID = data.statuses[0].id_str;
        Twitter.post('statuses/retweet/:id', {
            id: retweetID
        }, function (err, response) {
            if (response) {
                console.log("retweeted");
            }
            if (err) {
                console.log('error while retweeting');
            }
        });
        
    }else{
         console.log('error while searching');
        }
});
}
//Twitter.post('statuses/update',{status: 'beep boop'}, function(err, data, response){
//    console.log(data)
//})

//var contents = fs.readFileSync("config.json");

//var jsonContent = JSON.parse(contents);

//console.log(jsonContent.consumer_key);

//var T = new Twit();
/*
function sendPikachu(request, response) {
    response.send("Pika");
}

app.get('/pikachu', sendPikachu);

function sendPokemon(request, response) {
    var data = request.params;
    var reply = "pikachu is the best";
    console.log(data);
    response.send(reply);
}

app.get('/search/pikachu/25', sendPokemon);
*/
retweet();
//setInterval(retweet, 3000000); //retweet every 50 minutes
//retweet, post original, reply