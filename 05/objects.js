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

var hotelName = hotel['name'];
console.log(hotelName);

var roomsFree = hotel.checkAvail();

//update html
var elName = document.getElementById("hotelName");
elName.textContent = hotel.name;
