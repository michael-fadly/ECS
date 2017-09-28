function setup() { // start at the beginning
    createCanvas(500, 500);
    background(255);
}

function draw() { // run every frame
    /*
    var r = random(500);
    if(mouseIsPressed){
        fill(mouseX,mouseY,random(255));
        rect(mouseX, mouseY,r,r);
    }
    */
    var center = 250;
    fill(255,0,0);
    line(center, center - 100, center, center + 100);
    ellipse(center, center-100, 50, 50);/*
}
