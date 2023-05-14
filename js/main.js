import { getPhotos } from './data.js';
import { renderingPhotoMiniature } from './rendering.js';
import { showDownloadAlert } from './alert.js';
import './form.js';
import './formValidator.js';
import './effects.js';

getPhotos(renderingPhotoMiniature, showDownloadAlert);
