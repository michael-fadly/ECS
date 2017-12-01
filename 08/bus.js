//update html
/*
var xhr = new XMLHttpRequest();

xhr.onload = function(){
    //if(xhr.status === 200){
    responseObject = JSON.parse(xhr.responseText);
    //build
    var newContent ='';
    for (var i = 0; i < responseObject.events.length; i++){
        newContent += '<div class="event">';
        newContent += '<img src="'+responseObject.events[i].map+'"';
        newContent += '<alt="Map of '+responseObject.events[i].location+' ">'
        newContent += '<p><b>'+responseObject.events[i].location+'</b><br/>';
        newContent += responseObject.events[i].date+'</p>';
        newContent += '</div>';
    }
    //if(true){ //not on a server so the other if doesn't make sense
      //  document.getElementById('content').innerHTML - xhr.responseText;
    //}
    document.getElementById('content').innerHTML=newContent;
}

xhr.open('GET', 'data.json', true)
xhr.send(null);
*/1
//nav
$('nav a').on('click', function(e){
    e.preventDefault();
    var url = this.href;
    $('nav a.current').removeClass('current');
    $(this).addClass('current');
    $('#container').remove();
    $('#content').load(url + '#container').hide().fadeIn('slow');
});
