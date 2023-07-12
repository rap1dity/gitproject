let burger = document.getElementsByClassName('header-burger')[0];
let menu = document.getElementsByClassName('menu')[0];
let body = document.getElementsByTagName('body')[0];
burger.addEventListener("click", () =>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})