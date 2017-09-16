$(document).ready(function() {
  function checkScroll() {
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= window.innerHeight*0.4) {
      $(".header-outer").removeClass("transparent");
    } else {
      $(".header-outer").addClass("transparent");
    }
  }

  checkScroll();
  $(window).scroll(checkScroll);
});
