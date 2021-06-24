export default function combSort(array) {
  const factor = 1.247;
  let interval = Math.floor(array.length / factor);

  while (interval > 0) {
    for (let i = 0; i + interval < array.length; i += 1) {
      if (array[i] > array[i + interval]) {
        [array[i], array[i + interval]] = [array[i + interval], array[i]];
      }
    }

    interval = Math.floor(interval / factor);
  }

  return array;
}
