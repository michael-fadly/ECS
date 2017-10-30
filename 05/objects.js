var hotel ={
    name: "California",
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ["twin","double","suite"],
    checkAvail: function(){
        return this.rooms-this.booked;
    }
}
