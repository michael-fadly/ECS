/* 

//"this" is a keyword
//global variables > scope
 


var shape = {
    width: 600,
    height: 400,

    //a function inside an object is called a method
    getArea: function(){
        return this.width*this.height;
    }
};

var w = 600,
var s = {w:300};

var showW = function(){
	document.write(this.width);
};

s.getWidth = showW;
shape.getWidth();
*/

var msg = "<h2>browser window</h2><p>width: " + window.innerWidth + "</p>";
var el = document.getElementById("info");
alert("Current page: " + window.location);
