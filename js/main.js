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