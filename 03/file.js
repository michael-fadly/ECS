var txt;

function preload(){ // setup will not run until preload is done
    txt = loadStrings("sample.txt");
}

function setup(){
    noCanvas(); //specify don't draw anything
    console.log(txt);
}