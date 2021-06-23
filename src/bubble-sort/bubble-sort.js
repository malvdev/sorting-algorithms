export default function bubbleSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length - i - 1; j += 1) {
      const compareFirst = array[j];
      const compareSecond = array[j + 1];
      if (compareSecond < compareFirst) {
        array[j] = compareSecond;
        array[j + 1] = compareFirst;
      }
    }
  }

  return array;
}
