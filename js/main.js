import { generatePhotos} from './data.js';
import { renderingPhotoMiniature } from './rendering.js';

const photos = generatePhotos(25);
renderingPhotoMiniature(photos);
