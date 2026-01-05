

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
  $(".js-bg").slick({
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
    useTransform: false,
  });

  var topReturn = false;
  var $topReturn = $('#pagetop');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500 && !topReturn) {
      $topReturn.fadeIn();
      topReturn = true;
      // $header.addClass("-bg");
    } else if($(this).scrollTop() <= 500 && topReturn) {
      $topReturn.fadeOut();
      topReturn = false;
      // $header.removeClass("-bg");
    }
  });

  const $header = $("#header");
  const $header_items = $header.find(".sec-list .item");
  const $header_children = $header.find(".sec-list .children");
  const $nav = $("#nav");
  const $body = $("body");
  var body_pos = 0;
  $(".js-nav-btn").click(function(){
    if($(this).hasClass("active")){
      $nav.fadeOut();
      $nav.removeClass("active");

      $body.css("top", "");
      $body.removeClass("fixed");
      $(window).scrollTop(body_pos);
    }else{
      $nav.fadeIn();
      $nav.addClass("active");
      // $nav.css("animation-name", "bound-nav");

      body_pos = $(window).scrollTop();
      $body.css("top", -body_pos);
      $body.addClass("fixed");
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

  $nav.find(".sec-list .link").each(function(){
    const $elem = $(this);
    if($elem.next(".children").length){
      $elem.click(function(){
      });
    }
  });
  $nav.find(".sec-list .link").click(function(){
    if($(this).hasClass("active")){
      $(this).next(".children").slideUp();
    }else{
      $(this).next(".children").slideDown();
    }
    $(this).toggleClass("active");
  });
});