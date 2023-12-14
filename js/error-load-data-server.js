import {
  addHiddenClass,
  removeHiddenClass,
} from './util.js';

const errorLoadImgTemplate = document.getElementById('error-load-data-server');
const errorLoadImgSection = errorLoadImgTemplate.content.cloneNode(true).querySelector('.error');
document.body.appendChild(errorLoadImgSection);

const errorLoadImgButton = errorLoadImgSection.querySelector('.error__button');
errorLoadImgButton.addEventListener('click', hideErrorLoadImgMessage);

function addLoadImgEventListeners() {
  document.addEventListener('keydown', handleLoadImgKeyDown);
  document.addEventListener('click', handleLoadImgClickOutside);
}

function removeLoadImgEventListeners() {
  document.removeEventListener('keydown', handleLoadImgKeyDown);
  document.removeEventListener('click', handleLoadImgClickOutside);
}

export function showErrorLoadImgMessage() {
  removeHiddenClass(errorLoadImgSection);
  addLoadImgEventListeners();
}

function hideErrorLoadImgMessage() {
  addHiddenClass(errorLoadImgSection);
  removeLoadImgEventListeners();
}

function handleLoadImgKeyDown(event) {
  if (event.key === 'Escape') {
    hideErrorLoadImgMessage();
  }
}

function handleLoadImgClickOutside(event) {
  if (!errorLoadImgSection.contains(event.target)) {
    hideErrorLoadImgMessage();
  }
}
