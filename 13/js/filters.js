import { Filter, RANDOM_IMG_COUNT } from './constants.js';

const ACTIVE_FILTER_CLASS = 'img-filters__button--active';
const HIDDEN_OCNTAINER_CLASS = 'img-filters--inactive';
const filtersContainer = document.querySelector('.img-filters');

let activeFilter = Filter.DEFAULT;
let miniatures = [];

const sortRandomly = () => Math.random() - 0.5;
const sortByComments = (miniature1, miniature2) => miniature1.comments.length - miniature2.comments.length;

const getDefaultPictures = () => miniatures.slice();
const getRandomPictures = () => miniatures.slice().sort(sortRandomly).slice(0, RANDOM_IMG_COUNT);
const getDiscussedPictures = () => miniatures.slice().sort(sortByComments);

const getFilteredPictures = () => {
  switch (activeFilter) {
    case Filter.DEFAULT:
      return getDefaultPictures();
    case Filter.RANDOM:
      return getRandomPictures();
    case Filter.DISCUSSED:
      return getDiscussedPictures();
  }
};

const onFilterButtonClick = (callback) => (evt) => {
  const id = evt.target.id;

  if (id && id !== activeFilter) {
    filtersContainer.querySelector(`#${activeFilter}`).classList.remove(ACTIVE_FILTER_CLASS);
    evt.target.classList.add(ACTIVE_FILTER_CLASS);
    activeFilter = id;

    callback(getFilteredPictures());
  }
};

export const initFilters = (data, callback) => {
  miniatures = data.slice();

  filtersContainer.classList.remove(HIDDEN_OCNTAINER_CLASS);
  filtersContainer.addEventListener('click', onFilterButtonClick(callback));
};
