/*
//$(document).read(function(){});
$(':header').addClass('headline');
$('li:lt(4)').hide().fadeIn(1500);
$('li').on('click',function(){
    //$(this).remove();
    $(this).addClass('favorite');
});

$('li em').addClass('seasonal');
//$('li.hot').addClass('favorite');


// chaining
$('li[id!="one"]').hide().delay.(500).fadeIn(1000);
$('li:first-child').addClass('next');
$('li.priority').addClass('highlight');


//get html frag + node
$(function () { // self calling function
    var $listHTML = $('ul').html();
    $('ul').append($listHTML);

    var $listItemHTML = $('li').html();
    $('li').append('<i>'+$listItemHTML+'</i>');
});

//get text frag
$(function () { // self calling function
    var $listText = $('ul').text();
    $('ul').append('<p>'+$listText+'</p>');

    var $listItemText = $('li').html();
    $('li').append('<i>'+$listItemText+'</i>');
});

$(function (){
    $('li:contains("pine")').text('almonds');
    $('li.hot').html(function(){
       return '<em>'+$(this).text()+'</em>'
    });
    $('li#four').remove();
});

$(function () {
    $('ul').before('<p class="notice">just updated</p>');
    $('li.hot').prepend('+ ');
    var $newListItem = $('<li><em>gluten-free</em> soy sause</li>')
    $('li:last').after($newListItem);
});
*/

function e(){
    var $newListItem = $('<li><em>gluten-free</em> soy sause</li>')
    $('li:last').after($newListItem);
}

//var button00 = document.getElementById("button00");
//button00.addEventListener('click', e, false);

$('#button00').on('click',e);
