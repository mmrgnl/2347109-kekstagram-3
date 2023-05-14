const imgElement = document.querySelector('.img-upload__preview');
const zoomInElement = document.querySelector('.scale__control--bigger');
const zoomOutElement = document.querySelector('.scale__control--smaller');
export const scaleValueElement = document.querySelector('.scale__control--value');

export let oldEffect = 'effects__preview--none';

let chosenEffect = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]:checked');

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
