var srctxt, words, submit, seed;
function preload(){
    srctxt = loadStrings('sample.txt');//'https://u.teknik.io/dflXn.txt');
}
function setup(){
    noCanvas();
    
    //srctxt = join(srctxt,' ');
    srctxt = join(srctxt,'<br/>');
    
    seed = select("#seed");
    submit = select("#submit");
    submit.mousePressed(function(){
        createP(srctxt);
        createP(srctxt.length);
    });
}
