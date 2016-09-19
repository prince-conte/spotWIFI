 $(document).ready(function() {
     
$('textarea').on('keyup', function (e) {
  if (e.keyCode === 27) {
    $(this).val('');
  }
});
     
$("a.sc").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top - 70;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});
     
});
 
