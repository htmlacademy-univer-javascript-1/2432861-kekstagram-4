import { renderFullSizeWindow } from './full-size-picture.js';

let pictures = null;
const picturesContainer = document.querySelector('.pictures');

const createPictureElement = ({ id, url, description, likes, comments }) => `
  <a href="#" data-id="${id}" class="picture">
    <img class="picture__img" src="${url}" width="182" height="182" alt="${description}">
    <p class="picture__info">
      <span class="picture__comments">${comments.length}</span>
      <span class="picture__likes">${likes}</span>
    </p>
  </a>
`;

const onPictureContainerClick = (evt) => {
  const clickedElement = evt.target.closest('.picture');

  if (clickedElement) {
    const clickedPictureId = +clickedElement.dataset.id;
    const clickedPicture = pictures.find((picture) => picture.id === clickedPictureId);

    if (clickedPicture) {
      renderFullSizeWindow(clickedPicture);
    }
  }
};

const renderPicture = (picture) => {
  const template = createPictureElement(picture);
  picturesContainer.insertAdjacentHTML('afterbegin', template);
};

export const renderPhotos = (data) => {
  document
    .querySelectorAll('.picture')
    .forEach((element) => element.remove());

  pictures = data.slice();

  if (pictures) {
    pictures.forEach(renderPicture);
    picturesContainer.addEventListener('click', onPictureContainerClick);
  }
};
