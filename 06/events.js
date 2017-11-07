/*
 * if password is less than x chars(
 * prevent signup
 * highlight pswd box in red
 * make a popup
 * )
*/

function chkusr(){
	var lmsg = document.getElementById("feedback");
	var lusr = document.getElementById("username");
	if (lusr.value.length < 5){
		lmsg.textContent = "Username must be at least 5 characters";
	}else{
		lmsg.textContent = "";
	}
}
