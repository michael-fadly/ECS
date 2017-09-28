function setup() {
    createCanvas(500,500);
    strokeWeight(8);
    background(204);
}

function draw() {
    //this will draw a bunch of circles
    var a = 50;
    var b = 50;
    var c = 80;
    var d = 80;
    //maximum amount of line
    var limit = 6;
    
    //amount to shift in x
    var increase = 20;
    fill(100,100,100,100);
    
    for (var i=0; i<limit; i++) {
        ellipse(a+(i*increase*2),b+(i*increase*2),c+(i*increase),d+(i*increase));
    }
    /*
    //this will draw a bunch of lines
    
    var a = 20;
    var b = 40;
    var c = 80;
    var d = 80;
    
    //maximum amount of line
    var limit = 6;
    
    //amount to shift in x
    var increase = 60;
    
    //draw the lines
    for (var i=0; i<limit; i++) {
        line(a+(i*increase),b,c+(i*increase),d);
    }
    */
}