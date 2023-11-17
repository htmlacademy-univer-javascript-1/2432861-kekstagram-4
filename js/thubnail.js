const pictures = document.querySelector('.pictures');

const getPicture = ({ url, description, likes, comments }) => `
  <a href="#" class="picture">
    <img class="picture__img" src="${url}" width="182" height="182" alt=${description}>
    <p class="picture__info">
      <span class="picture__comments">${comments}</span>
      <span class="picture__likes">${likes}</span>
    </p>
  </a>
`;

export const renderPhotos = (data) => {
  const pictureTemplate = document.createDocumentFragment();

  data.forEach((pictureData) =>
    pictureTemplate.appendChild(getPicture(pictureData))
  );

  pictures.appendChild(pictureTemplate);
};
