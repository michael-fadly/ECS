//functions for writing html from javascript
function h1(a) {
    document.write("<h1>" + a + "</h1>");
}
function h2(a) {
    document.write("<h2>" + a + "</h2>");
}
function a(text, url) {
    document.write("<a href = " + url + ">" + text + "</a>");
}

var p, q, t; //price, quantity, total
p = 5; //$5 per title
q = 14; // 14 titles for "montague house"
t = p * q; //5*14=70

var element = document.getElementById('cost');
element.textContent = 'Cost: $' + t;

function calc() {
    q = document.getElementById('amount').value;
    t = p * q;
    var element = document.getElementById('cost');
    element.textContent = 'Cost: $' + t;
}

var name;

function hello() {
    name = document.getElementById('name').value;
    var element = document.getElementById('nameplace');
    element.textContent = 'Hello ' + name;
}

var offers = [10, 25, 50, 75, 100];
var names = ["Jenny", "bob", "John", 'Max'];
function offr() {
    hello();
    var i, listed;
    for (i = 0; i < names.length; i++) {
        listed = names[i];
        if (listed == name) {
            console.log("match")
            var match = true
            var offrnm = Math.floor(Math.random()*offers.length);
            console.log(offrnm)
            
        }
    }
    if (match != true) {
        console.log("new person");
    }
    else {
        var prcntoff=offers[offrnm];
        console.log(prcntoff);
        var message = "<a href=\'sale.html'\>"+prcntoff+" off~!</a>" //"wow"
        var elnote = document.getElementById('note');
        elnote.innerHTML=message;
    }
   
}