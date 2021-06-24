export default function shakerSort(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    for (let i = left; i < right; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }

    right -= 1;

    for (let i = right; left < i; i -= 1) {
      if (array[i] < array[i - 1]) {
        [array[i], array[i - 1]] = [array[i - 1], array[i]];
      }
    }

    left += 1;
  }

  return array;
}
