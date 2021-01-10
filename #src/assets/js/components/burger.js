const burger = document.querySelector('.header__burger');
const burgerChild = document.querySelector('.burger__menu');
const headerMenu = document.querySelector('.intro__menu');
const headerLogo = document.querySelector('.header__logo');
const headerButton = document.querySelector('.header__button');
const headerNav = document.querySelector('.header__menu')



burger.addEventListener('click', (item) => {
  addActiveToElement(burger, burgerChild, header, headerLogo, headerButton, headerMenu)
  document.body.classList.toggle('scroll-stop')
  headerNav.classList.toggle('disabled');
})

function addActiveToElement(...arguments) {

    for(let i = 0; i < arguments.length; i++) {
        arguments[i].classList.toggle('active')
    }

}