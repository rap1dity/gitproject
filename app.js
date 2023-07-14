let burger = document.getElementsByClassName('header-burger')[0];
let menu = document.getElementsByClassName('menu')[0];
let body = document.getElementsByTagName('body')[0];
burger.addEventListener("click", () =>{
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
})

const scrollableDiv = document.getElementsByClassName('review-list')[0];
const scrollItems = Array.from(document.getElementsByClassName('review'));
const scrollImg = Array.from(document.getElementsByClassName('reviewer-photo'));

function updateSelectedElement() {
    const scrollPosition = scrollableDiv.scrollTop;
    const selectedElementIndex = Math.floor(scrollPosition / scrollItems[0].offsetHeight);

    scrollItems.forEach((item, index) => {
        if (index === selectedElementIndex) {
            item.classList.add('selected');
            scrollImg[index].classList.add('active')
        } else {
            item.classList.remove('selected');
            scrollImg[index].classList.remove('active')
        }
    });
}
scrollableDiv.addEventListener('scroll', updateSelectedElement);