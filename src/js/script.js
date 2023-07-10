const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
close.addEventListener('click', () => {
    menu.classList.remove('active')
});

const percent = document.querySelectorAll(".skills__percent"),
  occupancy = document.querySelectorAll(".skills__scale span");
percent.forEach((item, i) => {
    occupancy[i].style.width = item.innerHTML;
});