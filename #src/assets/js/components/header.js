const header = document.querySelector('.header');
const headerLink = document.querySelector('.header__menu--link')
const intro = document.querySelector('.intro');

window.addEventListener('scroll', function() {

  if(window.pageYOffset >= intro.scrollHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }

      
});

