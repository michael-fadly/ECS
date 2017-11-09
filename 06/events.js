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
    document.body.removeChild
}
