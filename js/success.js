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

const successButtonClickHandler = () => {
  closeSuccessMessage();
};

function closeSuccessMessage() {
  addHiddenClass(successSection);

  successButton.removeEventListener('click', successButtonClickHandler);
  document.removeEventListener('keydown', escapeKeydownHandler);
}

export function showSuccessMessage() {
  removeHiddenClass(successSection);

  successButton.addEventListener('click', successButtonClickHandler);
  document.addEventListener('keydown', escapeKeydownHandler);
}
