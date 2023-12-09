import { createPhotos } from './data.js';
import { renderPhotos } from './thumbnails.js';
import { initEditPopup } from './edit-popup.js';

const photos = createPhotos();
renderPhotos(photos);

initEditPopup();
