var toggleHamburger = function() {
  $(".header-links, #hamburger-outer, .header-outer").toggleClass("expanded");
}

$(document).ready(function() {
  function checkScroll() {
    $(".header-links, #hamburger-outer, .header-outer").removeClass("expanded");

    var scrollTop = $(window).scrollTop();
    if(scrollTop >= window.innerHeight*0.4) {
      $(".header-outer").removeClass("transparent");
    } else {
      $(".header-outer").addClass("transparent");
    }
    if($(window).scrollLeft() > 0) {
      window.scrollTo(0, scrollTop);
    }
  }

  $("#hamburger-outer").click(toggleHamburger);

  checkScroll();
  $(window).scroll(checkScroll);
});
