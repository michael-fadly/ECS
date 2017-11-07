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
