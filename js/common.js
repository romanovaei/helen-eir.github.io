$(function () {
  var openMenu = function() {

	  $(this).toggleClass("nav__button_menu_close");
    $(this).toggleClass("nav__button_menu_open");
    $(".nav__item_catalog, .nav__item_order, .nav__item_search, .nav__item_cart").toggleClass("nav__item_hidden");
    $(".nav__item_catalog, .nav__item_order, .nav__item_search, .nav__item_cart").toggleClass("nav__menu_open");
	};

	$(".nav__button_menu").click(openMenu);

  (function() {
      $(".modal__button_open").bind('click', function() {
          modal.showModal();
      });

      $(".modal__button_close").bind('click', function() {
          modal.close();
      });
  })();

});
