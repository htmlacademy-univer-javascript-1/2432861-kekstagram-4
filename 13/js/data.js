import { getRandomInteger } from './util.js';
import {
  MESSAGES,
  NAMES,
  MAX_PHOTO_COUNT,
  MIN_LIKES_COUNT,
  MAX_LIKES_COUNT,
  MIN_COMMENTS_COUNT,
  MAX_COMMENTS_COUNT,
  MIN_AVATAR_COUNT,
  MAX_AVATAR_COUNT,
} from './constants.js';

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
    url: `photos/${id}.jpg`,
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

export const createPhotos = () => {
  const photos = [];

  for (let i = 1; i <= MAX_PHOTO_COUNT; i++) {
    photos.push(createPhoto(i));
  }

  return photos;
};
