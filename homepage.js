$(document).ready(function(){ 
$(".slick-outer").slick({
  infinite: false,
  slidesToShow: 3.3,
  slidesToScroll: 1,
  // dots: true,
  arrows: true,
  nextArrow: ".arrow.next",
  prevArrow: ".arrow.prev",
});
$(".slick-outer-one").slick({
  infinite: false,
  slidesToShow: 3.3,
  slidesToScroll: 1,
  // dots: true,
  arrows: true,
  nextArrow: ".slickArrow.next",
  prevArrow: ".slickArrow.prev",
});
$(".men").click(function(){
  $(".mega-menu").toggle();
});


var scrollUp = window.scrollY;
window.onscroll = function () {
  var scrollDown = window.scrollY;
  if (scrollUp > scrollDown) {
    document.getElementById("divOne").style.top = "0";
  } else {
    document.getElementById("divOne").style.top = "-50px";
  }
  scrollUp = scrollDown;
};
 });
