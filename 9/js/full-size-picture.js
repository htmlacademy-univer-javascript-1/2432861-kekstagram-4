import {
  STEP_COMMENTS,
} from './constants.js';

const bodyElement = document.querySelector('body');
const fullPictureElement = document.querySelector('.big-picture');
const exitButtonElement = fullPictureElement.querySelector('.big-picture__cancel');
const commentCountElement = fullPictureElement.querySelector('.social__comment-count');
const commentListElement = fullPictureElement.querySelector('.social__comments');
const commentsLoaderElement = fullPictureElement.querySelector('.social__comments-loader');

let pictureComments = null;
let countVisibleСomments = STEP_COMMENTS;

const createCommentElement = ({ avatar, message, name }) => `
  <li class="social__comment">
    <img class="social__picture" 
      src="${avatar}" 
      alt="${name}" 
      width="35" 
      height="35">
    <p class="social__text">${message}</p>
  </li>
`;

const renderFullSizePicture = ({ url, likes, description }) => {
  const pictureElement = fullPictureElement.querySelector('.big-picture__img img');
  const captionElement = fullPictureElement.querySelector('.social__caption');
  const likesCountElement = fullPictureElement.querySelector('.likes-count');

  pictureElement.src = url;
  pictureElement.alt = description;
  captionElement.textContent = description;
  likesCountElement.textContent = likes;
};

const addHiddenClass = (element) => element.classList.add('hidden');
const removeHiddenClass = (element) => element.classList.remove('hidden');
const removeModalOpenClass = (element) => element.classList.remove('modal-open');
const addModalOpenClass = (element) => element.classList.add('modal-open');

const renderComments = () => {
  const visibleComments = pictureComments.slice(0, countVisibleСomments);
  const visibleCommentsLength = visibleComments.length;
  const commentsPictureLength = pictureComments.length;

  commentCountElement.textContent = ` 
    ${visibleCommentsLength} из ${commentsPictureLength} комментариев
  `;
  commentListElement.innerHTML = visibleComments.map(createCommentElement).join('');

  const shouldHideLoader = visibleCommentsLength >= commentsPictureLength;
  (shouldHideLoader ? addHiddenClass : removeHiddenClass)(commentsLoaderElement);
};

const closeFullSizeImage = () => {
  countVisibleСomments = STEP_COMMENTS;

  addHiddenClass(fullPictureElement);
  addHiddenClass(commentCountElement);
  removeModalOpenClass(bodyElement);
};

const buttonLoadMoreCommentsClickHandler = () => {
  countVisibleСomments += STEP_COMMENTS;

  renderComments();
};

const escapeKeydownHandler = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFullSizeImage();
  }
};

const exitButtonClickHandler = () => closeFullSizeImage();

export const renderFullSizeWindow = (picture) => {
  pictureComments = picture.comments;

  renderFullSizePicture(picture);
  renderComments();

  removeHiddenClass(fullPictureElement);
  removeHiddenClass(commentCountElement);
  addModalOpenClass(bodyElement);

  exitButtonElement.addEventListener('click', exitButtonClickHandler);
  document.addEventListener('keydown', escapeKeydownHandler);
  commentsLoaderElement.addEventListener('click', buttonLoadMoreCommentsClickHandler);
};
