var textfield, output, submit;

function setup() {
    textfield = select("#storyfield");
    submit = select("#submit");
    submit.mousePressed(newText);
    console.log('test');
    console.log(textfield.value());
    output = select('#output');
    textfield.input(newTyping)
}

function newText(){
    console.log('yams');
    createP(textfield.value());
}

function newTyping(){
    console.log(textfield.value());
    output.html(textfield.value());
}
