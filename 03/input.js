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
    }
}
