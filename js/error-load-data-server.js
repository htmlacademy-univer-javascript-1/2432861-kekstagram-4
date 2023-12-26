import {
  addHiddenClass,
  removeHiddenClass,
} from './utils.js';

const errorTemplateElement = document.getElementById('error-load-data-server');
const errorMessageElement = errorTemplateElement.content.cloneNode(true).querySelector('.error-load-data-server');
document.body.appendChild(errorMessageElement);

const errorSectionElement = document.querySelector('.error-load-data-server');
const errorButtonElement = document.querySelector('.error__button-load-data-server');

const onEscapeButtonKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeErrorMessage();
  }
};

const onOutsideClick = (evt) => {
  if (!evt.target.closest('.error__inner-load-data-server')) {
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

export function showErrorLoadImgMessage() {
  removeHiddenClass(errorSectionElement);

  errorButtonElement.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onEscapeButtonKeydown);
  document.addEventListener('click', onOutsideClick);
}
