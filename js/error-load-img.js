import {
  addHiddenClass,
  removeHiddenClass,
} from './utils.js';

const errorTemplateElement = document.getElementById('error');
const errorMessageElement = errorTemplateElement.content.cloneNode(true).querySelector('.error');
document.body.appendChild(errorMessageElement);

const errorSectionElement = document.querySelector('.error');
const errorButtonElement = document.querySelector('.error__button');

const onEscapeButtonKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeErrorMessage();
  }
};

const onOutsideClick = (evt) => {
  if (!evt.target.closest('.error__inner')) {
    closeErrorMessage();
  }
};

const onCloseButtonClick = () => closeErrorMessage();

function closeErrorMessage() {
  addHiddenClass(errorSectionElement);

  errorButtonElement.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onEscapeButtonKeydown);
  document.removeEventListener('click', onOutsideClick);
}

export function showErrorMessage() {
  removeHiddenClass(errorSectionElement);

  errorButtonElement.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onEscapeButtonKeydown);
  document.addEventListener('click', onOutsideClick);
}
