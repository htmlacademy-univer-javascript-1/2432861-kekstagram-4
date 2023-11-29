const bodyElement = document.querySelector('body');
const fullPictureElement = document.querySelector('.big-picture');
const commentCountElement = fullPictureElement.querySelector('.social__comment-count');
const commentListElement = fullPictureElement.querySelector('.social__comments');
const exitButtonElement = fullPictureElement.querySelector('.big-picture__cancel');

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

const renderComments = (comments) => {
  commentListElement.innerHTML = '';
  const commentsHtml = comments.map(createCommentElement).join('');
  commentListElement.insertAdjacentHTML('afterbegin', commentsHtml);
};

const addHiddenClass = (element) => element.classList.add('hidden');
const removeHiddenClass = (element) => element.classList.remove('hidden');
const removeModalOpenClass = (element) => element.classList.remove('modal-open');
const addModalOpenClass = (element) => element.classList.add('modal-open');

const closeFullSizeImage = () => {
  addHiddenClass(fullPictureElement);
  removeModalOpenClass(commentCountElement);
  removeModalOpenClass(bodyElement);
};

const escapeKeydownHandler = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFullSizeImage();
  }
};

const exitButtonClickHandler = () => closeFullSizeImage();

export const renderFullSizeWindow = (picture) => {
  renderFullSizePicture(picture);
  renderComments(picture.comments);

  removeHiddenClass(fullPictureElement);
  addHiddenClass(commentCountElement);
  addModalOpenClass(bodyElement);

  exitButtonElement.addEventListener('click', exitButtonClickHandler);
  document.addEventListener('keydown', escapeKeydownHandler);
};
