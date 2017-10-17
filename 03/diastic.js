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
