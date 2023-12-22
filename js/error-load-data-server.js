import {
  addHiddenClass,
  removeHiddenClass,
} from './utils.js';

const errorTemplate = document.getElementById('error-load-data-server');
const errorMessage = errorTemplate.content.cloneNode(true).querySelector('.error');
document.body.appendChild(errorMessage);

const errorSection = document.querySelector('.error');
const errorButton = document.querySelector('.error__button');

const escapeKeydownHandler = (evt) => {
  if (evt.key === 'Escape') {
    closeErrorMessage();
  }
};

const handleClickOutside = (evt) => {
  if (!evt.target.closest('.error__inner')) {
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
  document.removeEventListener('click', handleClickOutside);
}

export function showErrorLoadImgMessage() {
  removeHiddenClass(errorSection);

  errorButton.addEventListener('click', errorButtonClickHandler);
  document.addEventListener('keydown', escapeKeydownHandler);
  document.addEventListener('click', handleClickOutside);
}
