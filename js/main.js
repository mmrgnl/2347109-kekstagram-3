function getRandom(min, max) {   // Результат: целое число из диапазона "от...до"
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

function checkMaxLength(string, maxLength) {
  return string.length <= maxLength;
}


getRandom(15, 25);

checkMaxLength('Hello world!', 255);


