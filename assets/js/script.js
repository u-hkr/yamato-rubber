

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

});