var txt, seed, submit;

function setup(){
    noCanvas();
    
    seed = document.getElementById("seed");
    
    submit = document.getElementById("submit");
}

function test(){
    var s = document.getElementById("seed").value;
    var regex = /\d{3}[-.]\d{4}/g;
    document.getElementById("regtest").innerHTML=s.match(regex);
}

function TPE(){ // Test for the Presence of an Email address
    var s = document.getElementById("seed").value;
    //var regex = /\/w+@\w+.(net|com|org)/g;
    var regex = /\w+[._]?\w+@\w+.(net|com|org)/g;
    document.getElementById("regtest").innerHTML=s.match(regex);
}

/*
function exec(){
    var s = document.getElementById("seed").value;
    var regex = /\d{3}[-.]\d{4}/g;
    var result = regex.exec(s);
    while (result != null){
        //document.getElementById("regtest").innerHTML=result[1];
        console.log(result);
    }
}
*/

function splitting(){
    var s = document.getElementById("seed").value;
    var regex = /[,.!?\s]+/;
    var words = s.split(regex);
    //console.log(words);
    
    //createP
    var para = document.createElement("p");
    var node = document.createTextNode(words);
    para.appendChild(node);
    var element = document.getElementById("regtest");
    element.appendChild(node);
}

function replace(){
    var s = document.getElementById("seed").value;
    //var regex = /\d{3}[-.]\d{4}/g;
    var regex = document.getElementById("thing_to_replace").value;
    var replace_this = document.getElementById("replace_this").value;
    var newstring = s.replace(regex,replace_this);
    console.log(newstring);
}
