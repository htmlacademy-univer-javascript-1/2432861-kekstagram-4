function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      // console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);

      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);

    return currentValue;
  };
}

const generateCommentId = createRandomIdFromRangeGenerator(1, 1000);
const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);

const photos = [];

function generateRandomComment() {
  const messages = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const names = ['Александр', 'Екатерина', 'Иван', 'Мария', 'Дмитрий', 'Анна'];

  const comment = {
    id: generateCommentId(),
    avatar: `photos/${getRandomInteger(1, 6).toString()}.jpg`,
    message: messages[getRandomInteger(0, messages.length - 1)],
    name: names[getRandomInteger(0, names.length - 1)],
  };

  return comment;
}

function createPhoto() {
  const photoId = generatePhotoId();
  const photo = {
    id: photoId,
    url: `photos/${photoId.toString()}.png`,
    description: `Описание ${photoId.toString()}-ой фотографии`,
    likes: getRandomInteger(15, 200),
    comments: []
  };

  const numComments = getRandomInteger(0, 30);
  for (let i = 0; i < numComments; i++) {
    photo.comments.push(generateRandomComment());
  }

  return photo;
}

for (let i = 1; i <= 25; i++) {
  photos.push(createPhoto());
}

// console.log(photos);
// console.log(photos[0].comments);

