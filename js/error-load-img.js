import {
  addHiddenClass,
  removeHiddenClass,
} from './util.js';

const errorTemplate = document.getElementById('error');
const errorSection = errorTemplate.content.cloneNode(true).querySelector('.error');
document.body.appendChild(errorSection);

const errorButton = errorSection.querySelector('.error__button');
errorButton.addEventListener('click', hideErrorMessage);

function addEventListeners() {
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('click', handleClickOutside);
}

function removeEventListeners() {
  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('click', handleClickOutside);
}

export function showErrorMessage() {
  removeHiddenClass(errorSection);
  addEventListeners();
}

function hideErrorMessage() {
  addHiddenClass(errorSection);
  removeEventListeners();
}

function handleKeyDown(event) {
  if (event.key === 'Escape') {
    hideErrorMessage();
  }
}

function handleClickOutside(event) {
  if (!errorSection.contains(event.target)) {
    hideErrorMessage();
  }
}
