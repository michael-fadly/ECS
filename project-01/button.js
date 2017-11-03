/*
function press(){
	var q = document.getElementById("q");
	var rnum=Math.floor(Math.random()*100)
	q.textContent=rnum;
}
*/

var msg = [];

var number ={
	value: 0,
	result: false,
	presss: function(){
		var rnum=Math.floor(Math.random()*100);
		number.value=rnum;
		msg.push(rnum);
		if (rnum > 49){
			number.result = true;
		}else{
			number.result = false;
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
