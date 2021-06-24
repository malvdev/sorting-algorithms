export default function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i += 1) {
    let idxMin = i;

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[idxMin] > array[j]) {
        idxMin = j;
      }
    }

    if (idxMin !== i) {
      [array[i], array[idxMin]] = [array[idxMin], array[i]];
    }
  }

  return array;
}
