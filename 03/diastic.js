var srctxt, words, submit, seed;

function preload() {
    srctxt = loadStrings('sample.txt');
}

function setup() {
    noCanvas();
    srctxt = join(srctxt, ' ');

    words = splitTokens(srctxt, ' .,!?')

    seed = select("#seed");
    submit = select("#submit");
    submit.mousePressed(function () {
        var poem = diastic(seed.value(), words);
    });
}

function diastic(se, wo) {
    var phrase = "";

    for (var j = 0; j < seed.value().length; j++) {
        var c = seed.value().charAt(j);
        for (var i = 0; i < words.length; i++) {
            if (words[i].charAt(j) == seed.value().charAt(j)) {
                createP(words[i]);
                break;
            }
        }
    }
}
