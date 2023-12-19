import {
  addHiddenClass,
  removeHiddenClass,
} from './utils.js';

const errorTemplate = document.getElementById('error');
const errorMessage = errorTemplate.content.cloneNode(true).querySelector('.error');
document.body.appendChild(errorMessage);

const errorSection = document.querySelector('.error');
const errorButton = document.querySelector('.error__button');

const escapeKeydownHandler = (evt) => {
  if (evt.key === 'Escape') {
    closeErrorMessage();
  }
};

const errorButtonClickHandler = () => {
  closeErrorMessage();
};

function closeErrorMessage() {
  addHiddenClass(errorSection);

  errorButton.removeEventListener('click', errorButtonClickHandler);
  document.removeEventListener('keydown', escapeKeydownHandler);
}

export function showErrorMessage() {
  removeHiddenClass(errorSection);

  errorButton.addEventListener('click', errorButtonClickHandler);
  document.addEventListener('keydown', escapeKeydownHandler);
}
