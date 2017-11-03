/*
function press(){
	var q = document.getElementById("q");
	var rnum=Math.floor(Math.random()*100)
	q.textContent=rnum;
}
*/

var number ={
	value: 0,
	presss: function(){
		//var q = document.getElementById("q");
		var rnum=Math.floor(Math.random()*100)
		//q.textContent=rnum;
		number.value=rnum
	}
};

function press(){
	var q = document.getElementById("q");
	var w = number.presss();
	q.textContent=number.value;
}
