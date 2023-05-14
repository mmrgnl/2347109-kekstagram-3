import { isEscapeKey } from './util.js';

const successMessageElement = document.querySelector('#success').content;
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
  document.querySelector('section.success').remove();
  document.removeEventListener('click', closeUploadSuccess);
  document.removeEventListener('keydown', onSuccessEscapeKeyDown);
}

export function openUploadSuccess() {
  const closeButtonClickHandler = () => {
    closeUploadSuccess();
  };

  successButton.addEventListener('click', closeButtonClickHandler);
  document.body.append(successMessageElement.cloneNode(true));
  document.body.addEventListener('keydown', onSuccessEscapeKeyDown);
  document.addEventListener('click', closeUploadSuccess, { once: true });
}

export function closeUploadError() {
  document.querySelector('section.error').remove();
  document.body.classList.add('modal-open');
  document.removeEventListener('keydown', onErrorEscapeKeyDown);
}

export function openUploadError() {
  const closeButtonClickHandler = () => {
    closeUploadError();
  };

  errorButton.addEventListener('click', closeButtonClickHandler);
  document.body.append(errorMessageElement.cloneNode(true));
  errorMessageElement.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  document.body.addEventListener('keydown', onErrorEscapeKeyDown);
}
