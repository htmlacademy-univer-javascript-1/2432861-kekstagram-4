import { FilterSettings, SliderSettings } from './constants.js';
import {
  addHiddenClass,
  removeHiddenClass,
} from './util.js';

const bodyElement = document.querySelector('body');
const imageElement = bodyElement.querySelector('.img-upload__preview');
const sliderElement = bodyElement.querySelector('.effect-level__slider');
const sliderContainerElement = bodyElement.querySelector('.img-upload__effect-level');
const effectElement = bodyElement.querySelector('.img-upload__effects');
const effectLevelElement = bodyElement.querySelector('.effect-level__value');

let currentEffect = 'none';
let isSliderCreated = false;

const updateFilterValue = () => {
  const { value } = effectLevelElement;
  const filterSettings = FilterSettings[currentEffect];

  return (currentEffect === 'none') ? null : `${filterSettings.style}(${value}${filterSettings.unit})`;
};

const setStyle = () => {
  imageElement.style.filter = updateFilterValue();
};

const onSliderUpdate = () => {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  setStyle();
};

const createSlider = ({ min, max, step }) => {
  noUiSlider.create(sliderElement, {
    range: { min, max },
    step,
    start: max,
    connect: 'lower',
    format: {
      to: (value) => +value,
      from: (value) => +value,
    }
  });
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  addHiddenClass(sliderContainerElement);
};

const updateSlider = ({ min, max, step }) => {
  sliderElement.noUiSlider.updateOptions({
    range: { min, max },
    step,
    start: max,
  });
};

const setSlider = () => {
  if (currentEffect === 'none') {
    addHiddenClass(sliderContainerElement);
  } else {
    updateSlider(SliderSettings[currentEffect]);
    removeHiddenClass(sliderContainerElement);
  }
};

const updateEffect = (effect) => {
  currentEffect = effect;

  setSlider();
  setStyle();
};

const onEffectChange = (evt) => {
  updateEffect(evt.target.value);
};

export const initEffect = () => {
  if (!isSliderCreated) {
    createSlider(SliderSettings[currentEffect]);
    isSliderCreated = true;
  }

  effectElement.addEventListener('change', onEffectChange);
};

export const destroyEffect = () => {
  updateEffect('none');

  effectElement.removeEventListener('change', onEffectChange);
};
