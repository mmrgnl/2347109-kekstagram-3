
import { oldEffect } from './effects.js';
import { validateComment } from './formValidator.js';
import {openUploadSuccess, openUploadError} from './API.js';

export const BACKEND_URL = 'https://27.javascript.pages.academy/kekstagram-simple';
export const isEscapeKey = (e) => e.key === 'Escape';

const image = document.querySelector('.img-upload__preview');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const downloadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');


function cleanForm() {
  downloadButton.value = null;
  hashtag.value = null;
  comment.value = null;
  image.classList.remove(oldEffect);
  image.classList.add('effects__preview--none');
}

const onFormEscapeKeyDown = (e) => {
  if (isEscapeKey(e)) {
    e.preventDefault();
    closeDownloadWindow();
  }
};

function openDownloadWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.body.addEventListener('keydown', onFormEscapeKeyDown);
}

function closeDownloadWindow() {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeyDown);
  cleanForm();
}

downloadButton.addEventListener('change', () => { openDownloadWindow(); });

cancelButton.addEventListener('click', () => {closeDownloadWindow(); });

form.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  if (!validateComment(comment.value)) {
    return;
  }
  const formData = new FormData(evt.target);
  try {
    const response = await fetch(BACKEND_URL, {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      closeDownloadWindow();
      openUploadSuccess();
    } else {
      openUploadError();
    }
  } catch (error) {
    openUploadError();
  }
});

