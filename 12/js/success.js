import {
  addHiddenClass,
  removeHiddenClass,
} from './utils.js';

const successTemplate = document.getElementById('success');
const successMessage = successTemplate.content.cloneNode(true).querySelector('.success');
document.body.appendChild(successMessage);

const successSection = document.querySelector('.success');
const successButton = document.querySelector('.success__button');

const onDocumentEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeSuccessMessage();
  }
};

const hideSuccessMessage = () => {
  closeSuccessMessage();
};

function closeSuccessMessage() {
  addHiddenClass(successSection);

  successButton.removeEventListener('click', hideSuccessMessage);
  document.removeEventListener('keydown', onDocumentEscKeydown);
}

export function showSuccessMessage() {
  removeHiddenClass(successSection);

  successButton.addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', onDocumentEscKeydown);
}
