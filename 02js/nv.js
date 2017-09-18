var p, q, t; //price, quantity, total
p = 5; //$5 per title
q = 14; // 14 titles for "montague house"
t = p * q; //5*14=70

var element = document.getElementById('cost');
element.textContent = 'Cost: $' + t;
