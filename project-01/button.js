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
		var q = document.getElementById("q");
		var rnum=Math.floor(Math.random()*100)
		q.textContent=rnum;
	}
};

function press(){
	var w = number.presss();
}
