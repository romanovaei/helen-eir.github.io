function Menu(accordeon) {
  var elem = accordeon.elem;

  elem.mousedown = function() {
    return false;
  }

  elem.onclick = function(event) {
    if (event.target.closest(".nav__button_menu")) {
      elem.classList.toggle("nav__menu_open");
    }
  };

}

// использование
var menu = new Menu({
  elem: document.getElementById("menu_open")
});
