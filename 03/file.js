var txt;

function preload(){ // setup will not run until preload is done
    txt = loadStrings('sample.txt', loaded);
}

function setup(){
    noCanvas(); //specify don't draw anything
}

function loaded(){
    console.log(txt);
}