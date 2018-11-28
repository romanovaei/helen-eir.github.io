$(function () {
  var one = function() {

	  $(this).toggleClass("nav__button_menu_close");
    $(this).toggleClass("nav__button_menu_open");
	  $("header").toggleClass("header__page_close");
    $("header").toggleClass("header__page_open");
    $(".nav__item_catalog, .nav__item_order, .nav__item_search, .nav__item_cart").toggleClass("nav__item_hidden");
    $(".nav__item_catalog, .nav__item_order, .nav__item_search, .nav__item_cart").toggleClass("nav__menu_open");
	};

	$(".nav__button_menu").click(one);
});
