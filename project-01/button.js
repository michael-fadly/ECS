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
		if (rnum > 49){
			number.result = true;
		}
	}
};

function press(){
	var q = document.getElementById("q");
	var result = document.getElementById("result");
	var w = number.presss();
	q.textContent=number.value;
	if (number.result){
		result.textContent="You have passed";
	}else{
		result.textContent="You have failed";
	}
}
