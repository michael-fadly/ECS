var srctxt, words, submit, seed;
function preload(){
    srctxt = loadStrings('sample.txt');//'https://u.teknik.io/dflXn.txt');
}
function setup(){
    noCanvas();
    srctxt = join(srctxt,' ');
    
    words = splitTokens(srctxt, ' .,!?')
    console.log(words);

    seed = select("#seed");
    submit = select("#submit");
    submit.mousePressed(function(){
        //createP(srctxt);
        //createP(srctxt.length);
        var poem = diastic();
    });
}
function diastic(se,wo){
    
}
