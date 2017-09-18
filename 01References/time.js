function h1(a){
    document.write("<h1>"+a+"</h1>")
}
function h2(a){
    document.write("<h2>"+a+"</h2>")
}
var today = new Date();
var month = today.getMonth() + 1 // it's from 0 - 11 by default
h1("The date is ")
h2(today.getDate()+"/"+month+"/"+today.getFullYear())
var hour=today.getHours()
h1("The Time is ")
h2(+hour+":"+today.getMinutes())
if (hour<12){
    h2("Good Morning")
} else if (hour<18){
    h2("Good Afternoon")
} else {
    h2("Good Night")
}
   