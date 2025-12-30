

// ローディング
$(window).on('load', function() {
  var $loading = $("#loading");
  var is_firstload = sessionStorage.getItem('is-first-load');
  if (!is_firstload) {
    sessionStorage.setItem('is-first-load', true);
    $loading.addClass("active");

    setTimeout(function(){
      $loading.fadeOut();
      $("#mv").addClass("active");
    },3000);
  } else {
    $loading.hide();
    $("#mv").addClass("active");
  }
});

$(function(){
  $("#bg").slick({
    autoplay: true,
    autoplaySpeed: 0,
    speed: 60000,
    cssEase: "linear",
    slidesToShow: 1,
    variableWidth: true,
    swipe: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  })
});