/*
function press(){
	var q = document.getElementById("q");
	var rnum=Math.floor(Math.random()*100)
	q.textContent=rnum;
}
*/

var number ={
	value: 0,
	result: false,
	presss: function(){
		//var q = document.getElementById("q");
		var rnum=Math.floor(Math.random()*100);
		//q.textContent=rnum;
		number.value=rnum;
		if (rnum => 50){
			number.result = true;
		}
	}
};

function press(){
	var q = document.getElementById("q");
	var w = number.presss();
	q.textContent=number.value;
	if (number.result){
		console.log("passed");
	}
}
