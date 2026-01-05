

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
  });

  const $header = $("#header");
  const $header_items = $header.find(".sec-list .item");
  const $header_children = $header.find(".sec-list .children");
  const $nav = $("#nav");
  $(".js-nav-btn").click(function(){
    if($(this).hasClass("active")){
      $nav.fadeOut();
      $nav.removeClass("active");
    }else{
      $nav.fadeIn();
      $nav.addClass("active");
    }
    $(this).toggleClass("active");
  });
  $header_items.hover(function(e){
    if(!$(e.target).hasClass("link") || $(this).hasClass("active")) return;
    $header_items.removeClass("active");
    $header_children.hide();
    $header_children.removeClass("active");
    $header_children.css("left", "");
    $(this).addClass("active");
    const $children = $(this).find(".children");
    $children.fadeIn().css("display", "grid");
    $children.addClass("active");
    setpos_header_children($children);
  });
  $header_children.hover(function(){
  }, function(){
    $(this).fadeOut();
    $(this).addClass("active");
    $header_children.css("left", "");
    $header_items.removeClass("active");
  });
  
  function setpos_header_children($elem){
    const $item = $elem.parent();
    const width_item = $item.outerWidth();
    const pos_item = $item.offset().left;
    const width_child = $elem.outerWidth();
    const width_win = $(window).width();
    var transform = pos_item + (width_item/2) - (width_child/2);

    if(transform > 0){
      if(transform + width_child >= width_win){
        transform = width_win - width_child;
      }
    }else{
      transform = 0;
    }
    $elem.css("left", transform+"px");
  }
});