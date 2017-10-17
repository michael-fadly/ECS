var srctxt, words, submit, seed; //INIT THE VARIABLES

function preload() { //THIS FUNCTION IS RUN FIRST
    srctxt = loadStrings('sample.txt'); //LOAD THE TEXT FILE IN PRELOAD
}

function setup() { // this function is run next
    noCanvas(); //don't draw stuff
    srctxt = join(srctxt, ' '); //add spaces
    words = splitTokens(srctxt, ' .,!?') //split
    seed = select("#seed");
    submit = select("#submit");
    submit.mousePressed(function () {
        var amount_of_poems = 1;
        for (var i = 0; i < amount_of_poems; i++) {
            var poem = diastic2(seed.value(), words);
        }
    });
}

function diastic(se, wo) {
    var phrase = "";

    for (var j = 0; j < seed.value().length; j++) {
        var c = seed.value().charAt(j);
        for (var i = 0; i < words.length; i++) {
            if (words[i].charAt(j) == seed.value().charAt(j)) {
                phrase += words[i];
                phrase += " ";
                break;
            }
        }
    }
    createP(phrase);
}

function diastic2(se, wo) {
    var phrase = "";

    for (var j = 0; j < seed.value().length; j++) {
        var c = seed.value().charAt(j);
        for (var i = 0; i < words.length; i++) {
            if (words[i].charAt(j) == seed.value().charAt(j)) {
                var rnum = (Math.floor(Math.random() * 6) + 1);
                phrase += words[i + rnum];
                phrase += " ";
                break;
            }
        }

    }
    createP(phrase);
}
