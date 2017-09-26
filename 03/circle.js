function setup() { // start at the beginning
    createCanvas(500,500);
}

function draw() { // run every frame
    if(mouseIsPressed){
        fill(0);
    }else{
        fill(255);
    }
    background(204);
    ellipse(mouseX,mouseY,80,80);
}