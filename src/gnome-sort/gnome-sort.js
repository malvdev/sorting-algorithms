export default function gnomeSort(array) {
  let i = 1;

  while (i < array.length) {
    if (i > 0 && array[i - 1] > array[i]) {
      [array[i], array[i - 1]] = [array[i - 1], array[i]];
      i -= 1;
    } else {
      i += 1;
    }
  }

  return array;
}
