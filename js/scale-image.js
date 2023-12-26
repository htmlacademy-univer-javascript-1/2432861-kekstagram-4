import {
  DEFAULT_SCALE,
  STEP_SCALE,
  MAX_SCALE,
  MIN_SCALE,
  PARSE_INT_RADIX
} from './constants.js';

const overlayElement = document.querySelector('.img-upload__overlay');
const previewImageElement = overlayElement.querySelector('.img-upload__preview img');
const scaleElement = overlayElement.querySelector('.img-upload__scale');
const controlScaleInputElement = scaleElement.querySelector('.scale__control--value');
const controlBiggerScaleButtonElement = scaleElement.querySelector('.scale__control--bigger');
const controlSmallerScaleButtonElement = scaleElement.querySelector('.scale__control--smaller');

const imageScale = (value) => {
  const scaleTransformValue = `scale(${value / 100})`;

  previewImageElement.style.transform = scaleTransformValue;
  controlScaleInputElement.value = `${value}%`;
};

const updateScale = (step) => {
  const currentScalePercentage = parseInt(controlScaleInputElement.value, PARSE_INT_RADIX);
  const newScalePercentage = currentScalePercentage + step;
  const clampedScalePercentage = Math.min(Math.max(newScalePercentage, MIN_SCALE), MAX_SCALE);

  imageScale(clampedScalePercentage);
};

const onBiggerScaleButtonClick = () => {
  updateScale(STEP_SCALE);
};

const onSmallerScaleButtonClick = () => {
  updateScale(-STEP_SCALE);
};

export const destroyScale = () => {
  imageScale(DEFAULT_SCALE);

  controlBiggerScaleButtonElement.removeEventListener('click', onBiggerScaleButtonClick);
  controlSmallerScaleButtonElement.removeEventListener('click', onSmallerScaleButtonClick);
};

export const initScale = () => {
  controlBiggerScaleButtonElement.addEventListener('click', onBiggerScaleButtonClick);
  controlSmallerScaleButtonElement.addEventListener('click', onSmallerScaleButtonClick);
};


