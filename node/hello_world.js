console.log("Hello World!");
/*
function calcArea(width, height){ //this function can be used outside of this script
    var area = width*height
    return area;
}

var wall1 = calcArea(3,5);
var wall2 = calcArea(8,5);

console.log(wall1, "Wall1")
console.log(wall2, "Wall2")

var areaX = function(w,h){ //this function can not
    return w*h;
}

var size = areaX(3,5);
console.log(size);
*/
//self invoke
(function(){
    var w,h
    w=3;
    h=2;
    console.log(w*h);
    return(w*h);
}());