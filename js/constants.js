export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
export const NAMES = ['Александр', 'Екатерина', 'Иван', 'Мария', 'Дмитрий', 'Анна'];

export const MAX_PHOTO_COUNT = 25;
export const MIN_LIKES_COUNT = 15;
export const MAX_LIKES_COUNT = 200;
export const MIN_COMMENTS_COUNT = 0;
export const MAX_COMMENTS_COUNT = 30;
export const MIN_AVATAR_COUNT = 1;
export const MAX_AVATAR_COUNT = 6;

export const STEP_COMMENTS = 5;

export const MAX_COUNT_HASHTAG = 5;
export const MAX_COMMENT_LENGTH = 140;

export const DEFAULT_SCALE = 100;
export const STEP_SCALE = 25;
export const MAX_SCALE = 100;
export const MIN_SCALE = 25;

export const PARSE_INT_RADIX = 10;

export const FilterSetting = {
  DEFAULT_SETTING: 'none',
  CHROME: { style: 'grayscale', unit: '' },
  SEPIA: { style: 'sepia', unit: '' },
  MARVIN: { style: 'invert', unit: '%' },
  PHOBOS: { style: 'blur', unit: 'px' },
  HEAT: { style: 'brightness', unit: '' },
};

export const SliderSetting = {
  NONE: { min: 0, max: 100, step: 1 },
  CHROME: { min: 0, max: 1, step: 0.1 },
  SEPIA: { min: 0, max: 1, step: 0.1 },
  MARVIN: { min: 0, max: 100, step: 1 },
  PHOBOS: { min: 0, max: 3, step: 0.1 },
  HEAT: { min: 1, max: 3, step: 0.1 },
};
