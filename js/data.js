import { BACKEND_URL } from './form.js';

export function getPhotos (onSuccess, onError) {
  fetch(BACKEND_URL)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(onError);
}
