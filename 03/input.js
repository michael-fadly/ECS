var textfield, output, submit, txt;

function setup() {
    textfield = select("#storyfield");
    submit = select("#submit");
    submit.mousePressed(textLimiter);
    console.log('test');
    console.log(textfield.value());
    output = select('#output');
    textfield.input(newTyping)
}

function newText(){
    console.log(textfield.value());
    createP(textfield.value());
}

function newTyping(){
    output.html(textfield.value());
}

function textLimiter(){
    txt = textfield.value();
    console.log(txt.length + ' chars');
    if (txt.length > 140){
        createP('over 140 chars')
    }else{
        newText();
        wordSearch();
    }
}

function wordSearch(){
    var favword = "whomst"
    txt = textfield.value();
    var index = txt.indexOf(favword);
    if (index > -1){
       console.log("whomst'd've*");
    }else{
        console.log("you don't have my favorite word *cri*")
    }
    piece();
}

function piece(){
    //var np = txt.substring(txt.length/2,txt.length);
    //createP(np);
    var words = splitTokens(txt,' .;,');
    console.log(words);
    createP(words);
    createP(words[0]);
    for (i = 0; i < words.length; i++) { 
        createP(words[i]);
    }
}
