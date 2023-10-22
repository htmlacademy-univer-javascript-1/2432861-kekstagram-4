const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES = ['Александр', 'Екатерина', 'Иван', 'Мария', 'Дмитрий', 'Анна'];

const MAX_PHOTO_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;
const MIN_AVATAR_COUNT = 1;
const MAX_AVATAR_COUNT = 6;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const generateRandomComment = (id) => {
  const comment = {
    id,
    avatar: `photos/${getRandomInteger(MIN_AVATAR_COUNT, MAX_AVATAR_COUNT)}.jpg`,
    message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
    name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  };

  return comment;
};

const createPhoto = (id) => {
  const photo = {
    id,
    url: `photos/${id}.png`,
    description: `Описание ${id}-ой фотографии`,
    likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: []
  };

  const numComments = getRandomInteger(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT);
  for (let i = 1; i <= numComments; i++) {
    photo.comments.push(generateRandomComment(i));
  }

  return photo;
};

const createPhotos = () => {
  const photos = [];

  for (let i = 1; i <= MAX_PHOTO_COUNT; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
};

createPhotos();
