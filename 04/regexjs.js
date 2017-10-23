/*
var x = "string"; // string

var y = /string/; // regular expression

x.indexOf(); //index of char
x.length(); //length of string

*/

var txt, seed, submit;

function setup(){
    noCanvas();
    
    seed = select("#seed");
    
    submit = select("#submit");
    submit.mousePressed(test);
}
