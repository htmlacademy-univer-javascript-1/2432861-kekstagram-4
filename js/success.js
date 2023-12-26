import {
  addHiddenClass,
  removeHiddenClass,
} from './utils.js';

const successTemplate = document.getElementById('success');
const successMessage = successTemplate.content.cloneNode(true).querySelector('.success');
document.body.appendChild(successMessage);

const successSection = document.querySelector('.success');
const successButton = document.querySelector('.success__button');

const onEscapeButtonKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeSuccessMessage();
  }
};

const onOutsideClick = (evt) => {
  if (!evt.target.closest('.success__inner') && !evt.target.closest('.error__inner')) {
    closeSuccessMessage();
  }
};

const onCloseButtonClick = () => closeSuccessMessage();

function closeSuccessMessage() {
  addHiddenClass(successSection);

  successButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onEscapeButtonKeydown);
  document.removeEventListener('click', onOutsideClick);
}

export function showSuccessMessage() {
  removeHiddenClass(successSection);

  successButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onEscapeButtonKeydown);
  document.addEventListener('click', onOutsideClick);
}
