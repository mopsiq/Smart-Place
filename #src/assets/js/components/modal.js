const modal = document.querySelector('.modal')
const modalWrapper = document.querySelector('.wrapper')
let inputInModal = document.querySelectorAll('.modal__input')

headerButton.addEventListener('click', (e) => {
  e.preventDefault();
  
  modal.classList.add('active');
  modalWrapper.classList.toggle('active');
  document.body.classList.toggle('scroll-stop');
});


modalWrapper.addEventListener('click', () => {
  modal.classList.remove('active');
  modalWrapper.classList.toggle('active');
  document.body.classList.toggle('scroll-stop');

  inputInModal.forEach((item) => {
      if(item.value) {
          item.value = '';
      }
  });

});
