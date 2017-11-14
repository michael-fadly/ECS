/*
 * if password is less than x chars(
 * prevent signup
 * highlight pswd box in red
 * make a popup
 * )
*/

//get username from input
var lusr = document.getElementById("username");
//call function if it blurs
//lusr.addEventListener('blur', chkusr, false);
lusr.addEventListener('blur', function(){chkusr(5);}, false);

function chkusr(minln){
	var lmsg = document.getElementById("feedback");
	if (lusr.value.length < minln){
		lmsg.textContent = "Username must be at least 5 characters";
	}else{
		lmsg.textContent = "";
	}
}

var msg = '<div class=\"header\"><a id=\"close\" href="#">Close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Our servers are being updated between 2 and 4am ';
msg += 'During this time there may be many disruptions to service.</div>';

var elNote = document.createElement('div'); //create an element
elNote.setAttribute('id','note'); //add id = note
elNote.innerHTML = msg; //add msg to elnote
document.body.appendChild(elNote); //add it to the page through the body

var elClose = document.getElementById('close'); //close
elClose.addEventListener('click', dismissNote, false);
function dismissNote(){
    document.body.removeChild(elNote);
}

var q = document.getElementById("button");
q.addEventListener('click', yeet, false);

function yeet(){
    console.log("yeet");
}

var sx = document.getElementById("sx");
var sy = document.getElementById("sy");
var px = document.getElementById("px");
var py = document.getElementById("py");
var cx = document.getElementById("cx");
var cy = document.getElementById("cy");

function showPosition(event){
    sx.value = event.screenX;
    sy.value = event.screenY;
    px.value = event.pageX;
    py.value = event.pageY;
    cx.value = event.clientX;
    cy.value = event.clientY;
}

var elStats = document.getElementById('body');
elStats.addEventListener('mousemove',showPosition,false);

var elMess = document.getElementById("message");
elMess.addEventListener("keyup",charleft,false);
function charLeft(e){
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById("message");
    charDisplay = document.getElementById("charactersLeft");
    counter = 280 - textEntered.length;
}
