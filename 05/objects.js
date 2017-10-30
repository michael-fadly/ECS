//object
var hotel ={
    name: "California",
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ["twin","double","suite"],
    checkAvail: function(){
        return this.rooms-this.booked;
    }
};

//access object
console.log(hotel.name);
console.log(hotel.checkAvail());
