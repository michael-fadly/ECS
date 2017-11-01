// "this" is a keyword

var shape = {
    width: 600,
    height: 400,

    //a function inside an object is called a method
    getArea: function(){
        return this.width*this.height;
    }
};
