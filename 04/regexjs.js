/*
var x = "string"; // string

var y = /string/; // regular expression

x.indexOf(); //index of char
x.length(); //length of string

*/

var txt, seed, submit;

function setup(){
    noCanvas();
    
    seed = document.getElementById("seed");
    
    submit = document.getElementById("submit");
    //submit.mousePressed(test);
}

function test(){
    //console.log("test");
    var s = document.getElementById("seed").value;
    var regex = /\d{3}[-.]\d{4}/
    //document.write(regex.test(s));
    //document.getElementById("regtest").innerHTML=regex.test(s);
    document.getElementById("regtest").innerHTML=s.match(regex);
}
