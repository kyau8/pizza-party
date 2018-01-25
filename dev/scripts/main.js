
function onClickHandler(e) {
    const topping = e.value;
    const toppingId = document.getElementById(topping);
    const toppingLabel = document.querySelector(`label[for=${topping}]`);
    let pizzaTopping = document.querySelectorAll(`.${topping}`);
    for(let i = 0; i < pizzaTopping.length; i++)
        if(toppingId.checked) {
            pizzaTopping[i].classList.add("showClass");
            toppingLabel.classList.add('labelSelected');
            console.log(toppingId);
        } else {
            toppingLabel.classList.remove('labelSelected');
            pizzaTopping[i].classList.remove("showClass");
        }
}

