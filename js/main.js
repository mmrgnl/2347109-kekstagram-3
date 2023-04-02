function getRandomInt(min, max) {   // Результат: целое число из диапазона "от...до"
  if (min < 0) {
    min = Math.abs(max);
  }
  if (max < 0) {
    max = Math.abs(max);
  }

  if (min > max) {
    const i = max;
    max = min;
    min = i;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function stringLength(str, length) {
  return (str.length === length);
}// Результат: true, если строка проходит по длине, и false — если не проходит

// eslint-disable-next-line no-console
console.log(getRandomInt(4, -377.14));
// eslint-disable-next-line no-console
console.log(stringLength('Подготовка', 10));

