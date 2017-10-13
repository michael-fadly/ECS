var srctxt, words, submit, seed;
function preload(){
    srctxt = loadStrings('sample.txt');//'https://u.teknik.io/dflXn.txt');
}
function setup(){
    noCanvas();
    srctxt = join(srctxt,' ');
    
    words = splitTokens(srctxt, ' .,!?')

    seed = select("#seed");
    submit = select("#submit");
    submit.mousePressed(function(){
        var poem = diastic(seed.value(), words);
    });
}
function diastic(se,wo){
    var phrase = "";
    
    for (var j = 0; j < seed.value().length; j++) {
    for (var i = 0; i < words.length; i++) {
        if (words[i].charAt(j)==seed.value().charAt(j)){
            createP(words[i]);
        }
        /* some thing cool
        for (var q = 0; q < words[i].length; q++) {
        if (words[i].charAt(q)==seed.value().charAt(0)){
            createP(words[i]);}} */
    }
    }
}
