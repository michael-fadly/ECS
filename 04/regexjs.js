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
    console.log("YEET");
}
