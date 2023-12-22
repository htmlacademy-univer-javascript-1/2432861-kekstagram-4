import {
  addHiddenClass,
  removeHiddenClass,
} from './utils.js';

const successTemplate = document.getElementById('success');
const successMessage = successTemplate.content.cloneNode(true).querySelector('.success');
document.body.appendChild(successMessage);

const successSection = document.querySelector('.success');
const successButton = document.querySelector('.success__button');

const escapeKeydownHandler = (evt) => {
  if (evt.key === 'Escape') {
    closeSuccessMessage();
  }
};

const handleClickOutside = (evt) => {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    closeSuccessMessage();
  }
};

const successButtonClickHandler = () => {
  closeSuccessMessage();
};

function closeSuccessMessage() {
  addHiddenClass(successSection);

  successButton.removeEventListener('click', successButtonClickHandler);
  document.removeEventListener('keydown', escapeKeydownHandler);
  document.removeEventListener('click', handleClickOutside);
}

export function showSuccessMessage() {
  removeHiddenClass(successSection);

  successButton.addEventListener('click', successButtonClickHandler);
  document.addEventListener('keydown', escapeKeydownHandler);
  document.addEventListener('click', handleClickOutside);
}
