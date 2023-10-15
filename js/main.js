const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['Александр', 'Екатерина', 'Иван', 'Мария', 'Дмитрий', 'Анна'];
const MAX_COMMENT_ID = 1000;
const MAX_PHOTO_ID = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MAX_COMMENTS_COUNT = 30;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);

    return currentValue;
  };
};

const generateCommentId = createRandomIdFromRangeGenerator(1, MAX_COMMENT_ID);
const generatePhotoId = createRandomIdFromRangeGenerator(1, MAX_PHOTO_ID);

const generateRandomComment = () => {
  const comment = {
    id: generateCommentId(),
    avatar: `photos/${getRandomInteger(1, 6)}.jpg`,
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };

  return comment;
};

const createPhoto = () => {
  const photoId = generatePhotoId();
  const photo = {
    id: photoId,
    url: `photos/${photoId}.png`,
    description: `Описание ${photoId}-ой фотографии`,
    likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: []
  };

  const numComments = getRandomInteger(0, MAX_COMMENTS_COUNT);
  for (let i = 0; i < numComments; i++) {
    photo.comments.push(generateRandomComment());
  }

  return photo;
};

const createPhotos = () => {
  const photos = [];

  for (let i = 1; i <= MAX_PHOTO_ID; i++) {
    photos.push(createPhoto());
  }

  return photos;
};
