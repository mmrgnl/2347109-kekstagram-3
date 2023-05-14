import { isEscapeKey } from './form.js';

const successMessageElement = document.querySelector('#success').content.querySelector('.success');
const errorMessageElement = document.querySelector('#error').content.querySelector('.error');
const successButton = successMessageElement.querySelector('.success__button');
const errorButton = errorMessageElement.querySelector('.error__button');

const onSuccessEscapeKeyDown = (e) => {
  if (isEscapeKey(e)) {
    e.preventDefault();
    closeUploadSuccess();
  }
};

const onErrorEscapeKeyDown = (e) => {
  if (isEscapeKey(e)) {
    e.preventDefault();
    closeUploadError();
  }
};

export function closeUploadSuccess() {
  successMessageElement.classList.add('hidden');
  document.removeEventListener('click', closeUploadSuccess);
  document.removeEventListener('keydown', onSuccessEscapeKeyDown);
}

export function openUploadSuccess() {
  const closeButtonClickHandler = () => {
    closeUploadSuccess();
  };

  successButton.addEventListener('click', closeButtonClickHandler);
  successMessageElement.classList.remove('hidden');
  document.body.append(successMessageElement);
  document.body.addEventListener('keydown', onSuccessEscapeKeyDown);
  document.addEventListener('click', closeUploadSuccess, { once: true });
}

export function closeUploadError() {
  errorMessageElement.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.removeEventListener('keydown', onErrorEscapeKeyDown);
}

export function openUploadError() {
  const closeButtonClickHandler = () => {
    closeUploadError();
  };

  errorButton.addEventListener('click', closeButtonClickHandler);
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  errorMessageElement.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  document.body.append(errorMessageElement);
  document.body.addEventListener('keydown', onErrorEscapeKeyDown);
}
