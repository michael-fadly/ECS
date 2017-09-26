function setup() { // start at the beginning
    createCanvas(500,500);
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
    fill(0);
    ellipse(center,center,50,50);
    fill(255);
    ellipse(center+mouseX/25,center,25,25);
    fill(0);
    ellipse(center+mouseX/25,center,10,10);
}