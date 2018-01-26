'use strict';

function onClickHandler(e) {
    var topping = e.value;
    var toppingId = document.getElementById(topping);
    var toppingLabel = document.querySelector('label[for=' + topping + ']');
    var pizzaTopping = document.querySelectorAll('.' + topping);
    for (var i = 0; i < pizzaTopping.length; i++) {
        if (toppingId.checked) {
            pizzaTopping[i].classList.add("showClass");
            toppingLabel.classList.add('labelSelected');
        } else {
            toppingLabel.classList.remove('labelSelected');
            pizzaTopping[i].classList.remove("showClass");
        }
    }
}