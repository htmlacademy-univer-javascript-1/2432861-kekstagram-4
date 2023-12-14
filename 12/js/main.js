import { renderPhotos } from './thumbnails.js';
import { initEditPopup } from './edit-popup.js';
import { createLoader, ErrorText } from './api.js';
import { showErrorLoadImgMessage } from './error-load-data-server.js';

const onSuccess = (data) => {
  renderPhotos(data);
  initEditPopup();
};

try {
  createLoader(onSuccess, ErrorText.GET_DATA);
} catch (error) {
  showErrorLoadImgMessage();
}
