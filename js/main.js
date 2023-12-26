import { renderPhotos } from './thumbnails.js';
import { initEditPopup } from './edit-popup.js';
import { createLoader, ErrorText } from './api.js';
import { showErrorLoadImgMessage } from './error-load-data-server.js';
import { initFilters } from './filters.js';

const onSuccess = (data) => {
  renderPhotos(data);
  initFilters(data, renderPhotos);
  initEditPopup();
};

createLoader(onSuccess, ErrorText.GET_DATA)
  .catch(() => {
    showErrorLoadImgMessage();
  });
