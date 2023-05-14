import { BACKEND_URL_GET } from './form.js';

export function getPhotos (onSuccess, onError) {
  fetch(BACKEND_URL_GET)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(onError);
}
