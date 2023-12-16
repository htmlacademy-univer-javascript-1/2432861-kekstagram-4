// import {
//   addHiddenClass,
//   removeHiddenClass,
// } from './utils.js';

// const errorTemplate = document.getElementById('error');
// const errorSection = errorTemplate.content.cloneNode(true).querySelector('.error');
// document.body.appendChild(errorSection);

// const errorButton = errorSection.querySelector('.error__button');

// function addEventListeners() {
//   errorButton.addEventListener('click', hideErrorMessage);
//   document.addEventListener('keydown', handleKeyDown);
//   document.addEventListener('click', handleClickOutside);
// }

// function removeEventListeners() {
//   errorButton.removeEventListener('click', hideErrorMessage);
//   document.removeEventListener('keydown', handleKeyDown);
//   document.removeEventListener('click', handleClickOutside);
// }

// export function showErrorMessage() {
//   removeHiddenClass(errorSection);
//   addEventListeners();
// }

// function hideErrorMessage() {
//   addHiddenClass(errorSection);
//   removeEventListeners();
// }

// function handleKeyDown(event) {
//   if (event.key === 'Escape') {
//     hideErrorMessage();
//   }
// }

// function handleClickOutside(event) {
//   if (!errorSection.contains(event.target)) {
//     hideErrorMessage();
//   }
// }

import {
  addHiddenClass,
  removeHiddenClass,
} from './utils.js';

const errorTemplate = document.getElementById('error');
const errorMessage = errorTemplate.content.cloneNode(true).querySelector('.error');
document.body.appendChild(errorMessage);

const errorSection = document.querySelector('.error');
const errorButton = document.querySelector('.error__button');

const handleKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    closeErrorMessage();
  }
};

const handleClickOutside = () => {
  closeErrorMessage();
};

function closeErrorMessage() {
  addHiddenClass(errorSection);

  errorButton.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeyDown);
}

export function showErrorMessage() {
  removeHiddenClass(errorSection);

  errorButton.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeyDown);
}
