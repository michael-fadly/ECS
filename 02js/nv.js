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
function hello() {
    var name = document.getElementById('name').value;
    var element = document.getElementById('nameplace');
    element.textContent = 'Hello ' + name;
}