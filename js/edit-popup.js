import {
  addHiddenClass,
  removeHiddenClass,
  removeModalOpenClass,
  addModalOpenClass
} from './utils.js';
import { MAX_COUNT_HASHTAG, MAX_COMMENT_LENGTH } from './constants.js';
import { destroyEffect, initEffect } from './effect-image.js';
import { destroyScale, initScale } from './scale-image.js';
import { createSender, ErrorText } from './api.js';
import { showSuccessMessage } from './success.js';
import { showErrorMessage } from './error-load-img.js';

const bodyElement = document.querySelector('body');
const inputElement = bodyElement.querySelector('.img-upload__input');
const formElement = bodyElement.querySelector('.img-upload__form');
const overlayElement = formElement.querySelector('.img-upload__overlay');
const cancelElement = overlayElement.querySelector('.img-upload__cancel');
const submitButtonElement = bodyElement.querySelector('.img-upload__submit');
const descriptionInputElement = overlayElement.querySelector('.text__description');
const hashtagsInputElement = overlayElement.querySelector('.text__hashtags');
const imagePreviewElement = overlayElement.querySelector('.img-upload__preview img');

const hashtagRegex = /^#[a-zA-Zа-яА-Я0-9]{1,19}(?:\s+#[a-zA-Zа-яА-Я0-9]{1,19})*$/;

const pristineConfig = {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper-error-text',
};

let formValidation = null;

const splitHashtagInput = (input) => {
  const trimmedInput = input.trim();
  const hashtagsArray = trimmedInput.split(' ');

  return hashtagsArray;
};

const isHashtagValid = (hashtag, uniqueHashtagsSet) => {
  const lowercaseTag = hashtag.toLowerCase();

  if (hashtagRegex.test(lowercaseTag)) {
    if (uniqueHashtagsSet.has(lowercaseTag)) {
      return false;
    } else {
      uniqueHashtagsSet.add(lowercaseTag);
      return true;
    }
  } else {
    return false;
  }
};

const isEveryHashtagValid = (input) => {
  if (!input) {
    return true;
  }

  const hashtags = splitHashtagInput(input);
  const enoughHashtagsCount = hashtags.length <= MAX_COUNT_HASHTAG;

  const uniqueHashtagsSet = new Set();
  const isAllValid = hashtags.every((hashtag) => isHashtagValid(hashtag, uniqueHashtagsSet));

  return isAllValid && enoughHashtagsCount;
};

const isEveryCommentValid = (input) => {
  if (!input) {
    return true;
  }

  return input.length <= MAX_COMMENT_LENGTH;
};

const initValidation = () => {
  formValidation = new Pristine(formElement, pristineConfig);

  formValidation.addValidator(hashtagsInputElement, isEveryHashtagValid, 'Xештег не валиден');
  formValidation.addValidator(descriptionInputElement, isEveryCommentValid, 'Комментарий не валиден');
};

const onSuccess = () => {
  closeEditPopup();
  showSuccessMessage();
};

const onSubmitButtonClick = async (evt) => {
  evt.preventDefault();
  submitButtonElement.setAttribute('disabled', 'true');

  if (formValidation.validate()) {
    const formData = new FormData(formElement);

    try {
      await createSender(formData, onSuccess, ErrorText.SEND_DATA);
      submitButtonElement.removeAttribute('disabled');
    } catch (error) {
      showErrorMessage();
      submitButtonElement.removeAttribute('disabled');
    }
  }
};

const onInputEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
};

const onCloseButtonClick = () => {
  closeEditPopup();
};

const onDocumentEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onCloseButtonClick();
  }
};

const addEventListeners = () => {
  document.addEventListener('keydown', onDocumentEscKeydown);
  submitButtonElement.addEventListener('click', onSubmitButtonClick);
  cancelElement.addEventListener('click', onCloseButtonClick);
  descriptionInputElement.addEventListener('keydown', onInputEscKeydown);
  hashtagsInputElement.addEventListener('keydown', onInputEscKeydown);
};

const removeEventListeners = () => {
  document.removeEventListener('keydown', onDocumentEscKeydown);
  submitButtonElement.removeEventListener('click', onSubmitButtonClick);
  cancelElement.removeEventListener('click', onCloseButtonClick);
  descriptionInputElement.removeEventListener('keydown', onInputEscKeydown);
  hashtagsInputElement.removeEventListener('keydown', onInputEscKeydown);
};

function closeEditPopup() {
  formElement.reset();
  formValidation = null;

  addHiddenClass(overlayElement);
  removeModalOpenClass(bodyElement);
  destroyScale();
  destroyEffect();

  removeEventListeners();
}

const openEditPopup = () => {
  removeHiddenClass(overlayElement);
  addModalOpenClass(bodyElement);

  initValidation();
  addEventListeners();
};

const updateImagePreview = (file) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    imagePreviewElement.src = event.target.result;
  };

  reader.readAsDataURL(file);
};

const onFileInputChange = () => {
  const file = inputElement.files[0];

  if (file && file.type.startsWith('image/')) {
    updateImagePreview(file);

    openEditPopup();
    initScale();
    initEffect();
  }
};

export const initEditPopup = () => {
  inputElement.addEventListener('change', onFileInputChange);
};
