const pictureTemplate = document.querySelector('#picture').content;
const picturesContainer = document.querySelector('.pictures');

const createPictureElement = ({ url, description, likes, comments }) => {
  const picture = pictureTemplate.cloneNode(true);

  const pictureImg = picture.querySelector('.picture__img');
  const pictureLikes = picture.querySelector('.picture__likes');
  const pictureComments = picture.querySelector('.picture__comments');

  pictureImg.src = url;
  pictureImg.alt = description;
  pictureLikes.textContent = likes;
  pictureComments.textContent = comments.length;

  return picture;
};

export const renderPhotos = (data) => {
  const picturesFragment = document.createDocumentFragment();

  data.forEach((pictureData) =>
    picturesFragment.appendChild(createPictureElement(pictureData))
  );

  picturesContainer.appendChild(picturesFragment);
};

