function setup() { // start at the beginning
    createCanvas(500,500);
}

function draw() { // run every frame
    if(mouseIsPressed){
        background(204);
        ellipse(50,50,80,80);
    }
}