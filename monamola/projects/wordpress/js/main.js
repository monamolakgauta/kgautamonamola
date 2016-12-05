$(document).ready(function() {
   $("button").hover(function(){
       $(".social").show('slow');
   }); 
});

$(".one").hover(function() {
    $(".logo").animate({
        'marginLeft':'20px'
    }, 800);
});

$(document).ready(function() {
   $(".one").hover(function(){
       $(".word").show('slow');
   }); 
});

$(".logo").hover(function(){
    $(this).animate({
        'opacity':'0.5'
    });
});





function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), 
    zoom: 10
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}





