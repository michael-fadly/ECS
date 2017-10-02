var textfield, output, submit;

function setup() {
    textfield = select("#storyfield");
    submit = select("#submit");
    submit.mousePressed(textLimiter); //newText);
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
    //console.log(textfield.value());
    output.html(textfield.value());
}

function textLimiter(){
    var text = textfield.value();
    console.log(text.length + ' chars');
    if (text.length > 140){
        createP('over 140 chars')
    }else{
        //createP(textfield.value());
        newText();
        wordSearch();
    }
}

function wordSearch(){
    var favword = "whomst" // whomst'd've
    var text = textfield.value();
    var index = text.indexOf(favword);
    if (index > -1){
       console.log("whomst'd've*");
    }else{
        console.log("you don't have my favorite word *cri*")
    }
}