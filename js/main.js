$("body").on('click', '[href*="#"]', function (e) {
 var fixed_offset = 100;
 $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
 e.preventDefault();
});
$(".accessories-slider").slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 arrows: true,
 prevArrow: ".accessories-prev",
 nextArrow: ".accessories-next",
 responsive: [{
  breakpoint: 1200,
  settings: {
   slidesToShow: 3
  }
 },
 {
  breakpoint: 992,
  settings: {
   slidesToShow: 2
  }
 },
 {
  breakpoint: 576,
  settings: {
   slidesToShow: 1
  }
 }]
});
$(".reviews-slider").slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 slide: ".reviews-block-wrap",
 prevArrow: ".reviews-prev",
 nextArrow: ".reviews-next",
 responsive: [
  {
   breakpoint: 992,
   settings: {
    adaptiveHeight: true
   }
  }]
});
$(".bake-img1").slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 slide: "img",
 prevArrow: ".bake-prev1",
 nextArrow: ".bake-next1"
});
$(".bake-img2").slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 slide: "img",
 prevArrow: ".bake-prev2",
 nextArrow: ".bake-next2"
});
$(".bake-img3").slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 slide: "img",
 prevArrow: ".bake-prev3",
 nextArrow: ".bake-next3"
});
$(".bake-man-slider").slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: true,
 slide: "img",
 prevArrow: ".bake-prev4",
 nextArrow: ".bake-next4"
});
$('input[type="tel"]').inputmask("+ 375 (99) 999 - 99 - 99");
$('.questions-block-title').on('click', function () {
 $(this).closest('.questions-block').toggleClass('questions-block-active');
 $('.questions-block').not($(this).closest('.questions-block')).removeClass('questions-block-active');
});
$('.header-mob').on('click', function (e) {
 e.preventDefault();
 $("body").css("overflow", "hidden");
 $('.nav').addClass('nav-active');
});
if (screen.width < 768) {
 $('.nav-menu a').on('click', function () {
  $("body").css("overflow", "visible");
  $('.nav').removeClass('nav-active');
 });
}
$('.nav-close').on('click', function (e) {
 e.preventDefault();
 $("body").css("overflow", "visible");
 $('.nav').removeClass('nav-active');
});
if ($(window).width() > 767) {
 var mapx = 27.543933;
} else {
 var mapx = 27.560933;
};
$('.ready-block').slice(0, 4).show();
$('.ready-more').on('click', function (e) {
 e.preventDefault();
 $('.ready-block:hidden').slice(0, 4).slideDown();
 if ($("a").is(".ready-block:hidden")) {
 } else { $('.ready-more').hide(); }
});
if ($("div").is(".ready-block:hidden")) {
} else { $('.ready-more').hide(); }
(function ($) {
 $(function () {
  $('.catalog-tabs').on('click', '.catalog-tab:not(.catalog-tab-active)', function () {
   $(this)
    .addClass('catalog-tab-active').siblings().removeClass('catalog-tab-active')
    .closest('div.catalog').find('.catalog-cont-block').removeClass('catalog-cont-block-active').eq($(this).index()).addClass('catalog-cont-block-active');
   $('.catalog-more').show();
   $('.catalog-block').hide();
   if (screen.width >= 992) {
    $('.catalog-cont-block-active .catalog-block').slice(0, 9).show();
   }
   if (screen.width < 992) {
    $('.catalog-cont-block-active .catalog-block').slice(0, 4).show();
   }
   if ($("div").is(".catalog-cont-block-active .catalog-block:hidden")) {
   } else { $('.catalog-more').hide(); }
   $
  });
 });
})(jQuery);
if (screen.width >= 992) {
 $('.catalog-cont-block-active .catalog-block').slice(0, 9).show();
 $('.catalog-more').on('click', function (e) {
  e.preventDefault();
  $('.catalog-cont-block-active .catalog-block:hidden').slice(0, 9).slideDown();
  if ($("div").is(".catalog-cont-block-active .catalog-block:hidden")) {
  } else { $('.catalog-more').hide(); }
 });
}
if (screen.width < 992) {
 $('.catalog-cont-block-active .catalog-block').slice(0, 4).show();
 $('.catalog-more').on('click', function (e) {
  e.preventDefault();
  $('.catalog-cont-block-active .catalog-block:hidden').slice(0, 4).slideDown();
  if ($("div").is(".catalog-cont-block-active .catalog-block:hidden")) {
  } else { $('.catalog-more').hide(); }
 });
}
if ($("div").is(".catalog-cont-block-active .catalog-block:hidden")) {
} else { $('.catalog-more').hide(); }


$('.overlay').on('click', function (e) {
 if (!(($(e.target).parents('.popup').length) || ($(e.target).hasClass('popup')))) {
  $('body').css("overflow", "visible");
  $('.overlay').removeClass('overlay-active');
 }
});
$('.footer-polit').on('click', function (e) {
 e.preventDefault();
 $("body").css("overflow", "hidden");
 $('.overlay-polit').addClass('overlay-active');
});
$('.footer-rekv').on('click', function (e) {
 e.preventDefault();
 $("body").css("overflow", "hidden");
 $('.overlay-rekv').addClass('overlay-active');
});
$('.footer-opt').on('click', function (e) {
 e.preventDefault();
 $("body").css("overflow", "hidden");
 $('.overlay-call3').addClass('overlay-active');
});
$('.header-phone-call, .cards-bottom-btn, .ready-btn').on('click', function (e) {
 e.preventDefault();
 $("body").css("overflow", "hidden");
 $('.overlay-call1').addClass('overlay-active');
});
$('.catalog-block-bottom a, .bake-btn, .add-btn, .bake-man-el a, .ready-bottom a, .accessories-bottom a').on('click', function (e) {
 e.preventDefault();
 $("body").css("overflow", "hidden");
 $('.overlay-call2').addClass('overlay-active');
});



ymaps.ready(function () {
 var myMap = new ymaps.Map('map', {
  center: [53.875193, mapx],
  zoom: 15
 }, {
  searchControlProvider: 'yandex#search'
 }),


  myPlacemark = new ymaps.Placemark([53.875193, 27.560933], {
   hintContent: 'Минск, ул. Володько д. 18, офис 105а ',
   balloonContent: 'Минск, ул. Володько д. 18, офис 105а '
  }, {
   // Опции.
   // Необходимо указать данный тип макета.
   iconLayout: 'default#image',
   // Своё изображение иконки метки.
   iconImageHref: 'img/map.png',
   // Размеры метки.
   iconImageSize: [92, 114],
   // Смещение левого верхнего угла иконки относительно
   // её "ножки" (точки привязки).
   iconImageOffset: [-46, -114]
  });

 myMap.geoObjects
  .add(myPlacemark);
});
