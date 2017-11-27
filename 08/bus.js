//update html

var xhr = new XMLHttpRequest();

xhr.onload = function(){
    //if(xhr.status === 200){
    if(true){ //not on a server so the other if doesn't make sense
        document.getElementById('content').innerHTML - xhr.responseText;
    }
}

xhr.open('GET', 'date/data.html', true)
xhr.send(null);
