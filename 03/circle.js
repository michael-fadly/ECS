function setup() { // start at the beginning
    createCanvas(500,500);
    background(204);
}

function draw() { // run every frame
    if(mouseIsPressed){
        fill(0);
    }else{
        fill(255);
    }
    ellipse(mouseX,mouseY,80,80);
}