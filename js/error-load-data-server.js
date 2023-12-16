import {
  addHiddenClass,
  removeHiddenClass,
} from './utils.js';

const errorTemplate = document.getElementById('error-load-data-server');
const errorMessage = errorTemplate.content.cloneNode(true).querySelector('.error');
document.body.appendChild(errorMessage);

const errorSection = document.querySelector('.error');
const errorButton = document.querySelector('.error__button');

const handleKeyDown = (evt) => {
  if (evt.key === 'Escape') {
    closeErrorMessage();
  }
};

const handleClickOutside = () => {
  closeErrorMessage();
};

function closeErrorMessage() {
  addHiddenClass(errorSection);

  errorButton.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeyDown);
}

export function showErrorLoadImgMessage() {
  removeHiddenClass(errorSection);

  errorButton.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeyDown);
}
