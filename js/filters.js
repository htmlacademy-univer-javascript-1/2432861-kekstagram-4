import { Filter, RANDOM_IMG_COUNT } from './constants.js';

const filtersContainer = document.querySelector('.img-filters');

let currentFilter = Filter.DEFAULT;
let pictures = [];

const sortRandomly = () => Math.random() - 0.5;
const sortByComments = (picture1, picture2) => picture1.comments.length - picture2.comments.length;

const getDefaultPictures = () => pictures.slice();
const getRandomPictures = () => pictures.slice().sort(sortRandomly).slice(0, RANDOM_IMG_COUNT);
const getDiscussedPictures = () => pictures.slice().sort(sortByComments);

const getFilteredPictures = () => {
  switch (currentFilter) {
    case Filter.DEFAULT:
      return getDefaultPictures();
    case Filter.RANDOM:
      return getRandomPictures();
    case Filter.DISCUSSED:
      return getDiscussedPictures();
  }
};

const handleFilterButtonClick = (callback) => (evt) => {
  const clickedButton = evt.target;

  if (!clickedButton.classList.contains('img-filters__button')) {
    return;
  }

  if (clickedButton.id === currentFilter) {
    return;
  }

  filtersContainer.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  clickedButton.classList.add('img-filters__button--active');
  currentFilter = clickedButton.id;

  callback(getFilteredPictures());
};

export const initFilters = (data, callback) => {
  pictures = data.slice();

  filtersContainer.classList.remove('img-filters--inactive');
  filtersContainer.addEventListener('click', handleFilterButtonClick(callback));
};
