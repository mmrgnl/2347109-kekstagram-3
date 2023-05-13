const downloadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');

const zoomInElement = document.querySelector('.scale__control--bigger');
const zoomOutElement = document.querySelector('.scale__control--smaller');
const scaleValueElement = document.querySelector('.scale__control--value');
const imgElement = document.querySelector('.img-upload__preview');


const isEscapeKey = (e) => e.key === 'Escape';
function cleanForm() {
  downloadButton.value = null;
  hashtag.value = null;
  comment.value = null;
}

const onFormEscapeKeyDown = (e) => {
  if (isEscapeKey(e)) {
    e.preventDefault();
    closeDownloadWindow();
  }
};

function openDownloadWindow() {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.addEventListener('keydown', onFormEscapeKeyDown);
}

function closeDownloadWindow() {

  document.querySelector('.img-upload__overlay');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeyDown);
  cleanForm();
}

downloadButton.addEventListener('change', () => { openDownloadWindow(); });

cancelButton.addEventListener('click', () => {closeDownloadWindow(); });


zoomOutElement.addEventListener('click', () => {
  const intScale = parseInt(scaleValueElement.value, 10);
  if (intScale > 25) {
    scaleValueElement.value = `${intScale - 25}%`;
    imgElement.style = `transform: scale(${parseInt(scaleValueElement.value, 10) / 100})`;
  }
});

zoomInElement.addEventListener('click', () => {
  const intScale = parseInt(scaleValueElement.value, 10);
  if (intScale < 100) {
    scaleValueElement.value = `${intScale + 25}%`;
    imgElement.style = `transform: scale(${parseInt(scaleValueElement.value, 10) / 100})`;
  }
});


let chosenEffect = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]:checked');

let oldEffect = 'effects__preview--none';

const radios = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]');
radios.forEach((radio) => {
  radio.addEventListener('input', () => { setChosenEffect(); });
});

function setChosenEffect() {
  for (const radio of radios) {
    if (radio.checked) {
      chosenEffect = radio;
      imgElement.classList.remove(oldEffect);
      imgElement.classList.add(`effects__preview--${chosenEffect.value}`);
      oldEffect = `effects__preview--${chosenEffect.value}`;
    }
  }
}
