import { generatePhotos} from './data.js';
import { renderingPhotoMiniature } from './rendering.js';
import './form.js';
import './formValidator.js';

const photos = generatePhotos(25);
renderingPhotoMiniature(photos);
