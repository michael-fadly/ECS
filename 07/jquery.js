//$(document).read(function(){});
$(':header').addClass('headline');
$('li:lt(4)').hide().fadeIn(1500);
$('li').on('click',function(){
    //$(this).remove();
    $(this).addClass('favorite');
});

$('li em').addClass('seasonal');
//$('li.hot').addClass('favorite');

/*
// chaining
$('li[id!="one"]').hide().delay.(500).fadeIn(1000);
$('li:first-child').addClass('next');
$('li.priority').addClass('highlight');
*/
