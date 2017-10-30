var hotel = new Object();

hotel.name = "Quay";
hotel.rooms = 40;
hotel.booked =25;

hotel.checkAvail = function(){
    return this.rooms-this.booked;
}

hotel.name = "Park";
hotel.booked =30;

function hotel_yeet(name, rooms, booked){
    this.name=name;
    this.rooms = rooms;
    this.booked =booked;
    
    this.checkAvail = function(){
        return this.rooms-this.booked;
    };
}

var careHotel = new hotel_yeet("Care",60,13);

var elName = document.getElementById("hotelName");
elName.textContent = careHotel.name;

var elRoom = document.getElementById("rooms");
elRoom.textContent = careHotel.checkAvail();
