

// ローディング
$(window).on('load', function() {
  var $loading = $("#loading");
  const is_firstload = sessionStorage.getItem('is-first-load');
  if (!is_firstload) {
    sessionStorage.setItem('is-first-load', true);
    setTimeout(function(){
      $loading.fadeOut();
    },3000);
  } else {
    $loading.hide();
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