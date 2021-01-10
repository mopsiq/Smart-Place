// const ratings = document.querySelectorAll('.feedback__rating');
// const ratingStar = document.querySelectorAll('.footer__icon--star');
// const feedbackInner = document.querySelector('.feedback__inner');

// ratings.forEach((item) => {
//     const rating = item.children;

//     for(let i = 0; i < rating.length; i++) {
      
//       let currentStar = rating[i];
//       fillingInStars(rating, currentStar);
    
//     };

// });


// function fillingInStars(parentContainer, currentStar) {
//       let currentStarNumber = currentStar.getAttribute('data-number');

//       function createNotification(blockElement) {
//         let notification = document.createElement('div');
//         notification.textContent = "Спасибо, ваш голос будет учтён";
//         notification.className = 'feedback__alert';
//         blockElement.append(notification)
//         setTimeout(() => notification.classList.add('active'), 100)
//         setTimeout(() => notification.classList.add('disabled'), 3500)
//         setTimeout(() => notification.remove(), 3900)
//       }

//       function checkingConditions(elemCondition, blockStars, classCheck, color, mode) {

//         for(let i = 0; i < elemCondition; i++) {
//             if(blockStars[i].classList.contains(classCheck)) {
//               return false
//             } else {
//                 if(mode == 1) {
//                   blockStars[i].classList.add(classCheck);
//                   createNotification(feedbackInner);
//                 }
//               blockStars[i].style.fill=color;
//             };
//         };

//       };

//       currentStar.addEventListener('mouseenter', () => {
//         checkingConditions(currentStarNumber, parentContainer, 'evaluation', '#ff8d23')
//       });

//       currentStar.addEventListener('mouseleave', () => {
//         checkingConditions(currentStarNumber, parentContainer, 'evaluation', '')
//       });

//       currentStar.addEventListener('click', () => {
//         checkingConditions(currentStarNumber, parentContainer, 'evaluation', '', 1)
//       });

// };
