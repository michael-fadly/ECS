function setup() { // start at the beginning
    createCanvas(500,500);
    background(204);
}

function draw() { // run every frame
    if(mouseIsPressed){
        //fill(0);
        background(204);
    }//else{
        //fill(255);
    //}
    fill(mouseX,mouseY,255);
    ellipse(mouseX,mouseY,10,10);
}