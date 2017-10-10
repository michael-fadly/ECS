var srctxt, words;
function preload(){
    //srctext = loadStrings('sample.txt');
}
function setup(){
    noCanvas();
    seed = select("#seed");
    submit = select("#submit");
    submit.mousePressed(function(){
        createP(seed.value());
    });
}
