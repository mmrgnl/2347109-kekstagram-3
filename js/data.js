import { getRandom } from './util.js';
export function generatePhotos(count) {
  const generateSingle = (i) => ({
    id: i,
    url: `photos/${i + 1}.jpg`,
    description: 'Here is some random string: \'39CDF217\'',
    likes: getRandom(15, 200),
    comments: getRandom(0, 200),
  });

  const photoData = [];
  for (let i = 0; i < count; i++) {
    photoData.push(generateSingle(i));
  }
  return photoData;
}
