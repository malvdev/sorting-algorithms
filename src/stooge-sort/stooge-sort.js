export default function stoogeSort(array, left = 0, right = array.length - 1) {
  if (array.length <= 1) {
    return array;
  }

  if (array[left] > array[right]) {
    [array[left], array[right]] = [array[right], array[left]];
  }

  if (left + 1 >= right) {
    return array;
  }

  const third = Math.floor((right - left + 1) / 3);

  stoogeSort(array, left, right - third);
  stoogeSort(array, left + third, right);
  stoogeSort(array, left, right - third);

  return array;
}
