export function checkMaxLength(str, maxLength) {
  return str.length <= maxLength;
}

export const isEscapeKey = (e) => e.key === 'Escape';
