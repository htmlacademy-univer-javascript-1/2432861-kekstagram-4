import {
  STEP_COMMENTS,
} from './constants.js';
import {
  addHiddenClass,
  removeHiddenClass,
  removeModalOpenClass,
  addModalOpenClass
} from './utils.js';

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

const onCommentsMoreButtonClick = () => {
  countVisibleСomments += STEP_COMMENTS;

  renderComments();
};

const onCloseButtonClick = () => closeFullSizeImage();

const onEscapeButtonKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFullSizeImage();
  }
};

function closeFullSizeImage() {
  countVisibleСomments = STEP_COMMENTS;

  addHiddenClass(fullPictureElement);
  addHiddenClass(commentCountElement);
  removeModalOpenClass(bodyElement);

  exitButtonElement.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onEscapeButtonKeydown);
  commentsLoaderElement.removeEventListener('click', onCommentsMoreButtonClick);
}

export const renderFullSizeWindow = (picture) => {
  pictureComments = picture.comments;

  renderFullSizePicture(picture);
  renderComments();

  removeHiddenClass(fullPictureElement);
  removeHiddenClass(commentCountElement);
  addModalOpenClass(bodyElement);

  exitButtonElement.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onEscapeButtonKeydown);
  commentsLoaderElement.addEventListener('click', onCommentsMoreButtonClick);
};
