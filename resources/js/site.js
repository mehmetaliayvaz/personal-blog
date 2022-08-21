//header-mobile-icon
$('#icon-menu').click(function(){
  $('#mobile-nav').toggleClass('hidden block');
});

//header-scroll-sticky
$(window).scroll(function(){
  if ($(window).scrollTop() > 70) {
    $("#header").addClass("header-sticky");
    $("#header-nav").removeClass("text-white");
    $("#site-title").removeClass("md:text-white");
  }else {
    $("#header").removeClass("header-sticky");
    $("#header-nav").addClass("text-white");
    $("#site-title").addClass("md:text-white");
  }
})