import {
  addHiddenClass,
  removeHiddenClass,
} from './utils.js';

const successTemplate = document.getElementById('success');
const successMessage = successTemplate.content.cloneNode(true).querySelector('.success');
document.body.appendChild(successMessage);

const successSection = document.querySelector('.success');
const successButton = document.querySelector('.success__button');

const handleKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    closeSuccessMessage();
  }
};

const handleClickOutside = () => {
  closeSuccessMessage();
};

function closeSuccessMessage() {
  addHiddenClass(successSection);

  successButton.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeyDown);
}

export function showSuccessMessage() {
  removeHiddenClass(successSection);

  successButton.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeyDown);
}
