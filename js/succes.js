import {
  addHiddenClass,
  removeHiddenClass,
} from './util.js';

const successTemplate = document.getElementById('success');
const successMessage = successTemplate.content.cloneNode(true);
document.body.appendChild(successMessage);

const successSection = document.querySelector('.success');
const successButton = document.querySelector('.success__button');

function handleKeyDown(evt) {
  if (evt.key === 'Escape') {
    hideSuccessMessage();
  }
}

function handleClickOutside(evt) {
  if (!successSection.contains(evt.target)) {
    hideSuccessMessage();
  }
}

function addEventListeners() {
  successButton.addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('click', handleClickOutside);
}

function removeEventListeners() {
  successButton.removeEventListener('click', hideSuccessMessage);
  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('click', handleClickOutside);
}

export function showSuccessMessage() {
  removeHiddenClass(successSection);
  addEventListeners();
}

export function hideSuccessMessage() {
  addHiddenClass(successSection);
  removeEventListeners();
}
