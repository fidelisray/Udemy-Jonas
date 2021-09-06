'use strict';

const modal = document.getElementsByClassName('modal');
const overlay = document.getElementsByClassName('overlay');
const btnCloseModal = document.getElementsByClassName('close-modal');
const btnsShowModal = document.getElementsByClassName('show-modal');
const btnsShowModal2 = document.querySelectorAll('.show-modal');


// for (let i = 0; i < btnsShowModal.length; i++)
//   console.log(btnsShowModal[i].textContent);

// Function for Open Modal
const openModal = function () {
  modal[0].classList.remove('hidden');
  overlay[0].classList.remove('hidden');
}

// Function for Close Modal
const closeModal = function () {
  modal[0].classList.add('hidden');
  overlay[0].classList.add('hidden');
}


for (let i = 0; i < btnsShowModal2.length; i++) {
  btnsShowModal2[i].addEventListener('click', openModal);
}

btnCloseModal[0].addEventListener('click', closeModal);
overlay[0].addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !(modal[0].classList.contains('hidden')))
    closeModal();
})