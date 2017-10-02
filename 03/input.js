var textfield, output, submit;

function setup() {
    textfield = select("#storyfield");
    submit = select("#submit");
    submit.mousePressed(newText);
    console.log('test');
    console.log(textfield.value());
}

function newText(){
    console.log('yams');
    createP(textfield.value());
}