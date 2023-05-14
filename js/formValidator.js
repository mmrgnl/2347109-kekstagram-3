import { checkMaxLength } from './util.js';

const form = document.querySelector('.img-upload__form');

const pristine  = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

pristine.addValidator(form.querySelector('.text__description'),
  validateComment, 'Комментарий должен быть от 20 до 240 символов');

form.addEventListener('submit', (e) => {
  if (!pristine.validate()) {
    e.preventDefault();
  }
});

export function validateComment(value) {
  return checkMaxLength(value, 240) && !checkMaxLength(value, 19);
}
