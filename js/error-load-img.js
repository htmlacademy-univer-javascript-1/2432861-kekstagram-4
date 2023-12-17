import {
  addHiddenClass,
  removeHiddenClass,
} from './utils.js';

const errorTemplate = document.getElementById('error');
const errorMessage = errorTemplate.content.cloneNode(true).querySelector('.error');
document.body.appendChild(errorMessage);

const errorSection = document.querySelector('.error');
const errorButton = document.querySelector('.error__button');

const onDocumentEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeErrorMessage();
  }
};

const hideErrorMessage = () => {
  closeErrorMessage();
};

function closeErrorMessage() {
  addHiddenClass(errorSection);

  errorButton.removeEventListener('click', hideErrorMessage);
  document.removeEventListener('keydown', onDocumentEscKeydown);
}

export function showErrorMessage() {
  removeHiddenClass(errorSection);

  errorButton.addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', onDocumentEscKeydown);
}
