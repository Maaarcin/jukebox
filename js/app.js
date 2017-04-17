$(document).ready(function(){

var buttons = document.querySelectorAll(".circle");
var SongsTopPosition = jQuery('.songs').offset().top;
var GrungeTopPosition = jQuery('.grunge').offset().top;
var AboutTopPosition = jQuery('.about').offset().top;

buttons.forEach(function (btn) {
  btn.addEventListener("click", function(e) {
    var id = this.dataset.id;
    var src = ("https://www.youtube-nocookie.com/embed/" + id + "?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1");
  document.querySelector("iframe").src = src;
 });
});

jQuery('#songsNav').click(function(){
jQuery('html, body').animate({scrollTop:SongsTopPosition}, 'slow');
return false;
});

jQuery('#grungeNav').click(function(){
jQuery('html, body').animate({scrollTop:GrungeTopPosition}, 'slow');
return false;
});


jQuery('#aboutNav').click(function(){
jQuery('html, body').animate({scrollTop:AboutTopPosition}, 'slow');
return false;
});
});
