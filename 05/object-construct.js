var hotel = new Object();

hotel.name = "Quay";
hotel.rooms = 40;
hotel.booked =25;

hotel.checkAvail = function(){
    return this.rooms-this.booked;
}

hotel.name = "Park";
hotel.booked =30;

var elName = document.getElementById("hotelName");