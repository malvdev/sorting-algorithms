export function mergeArrays(leftArray, rightArray) {
  const sortedArray = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex]);
      leftIndex += 1;
    } else {
      sortedArray.push(rightArray[rightIndex]);
      rightIndex += 1;
    }
  }

  return [
    ...sortedArray,
    ...leftArray.slice(leftIndex),
    ...rightArray.slice(rightIndex),
  ];
}

export default function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex, array.length);

  const leftArraySorted = mergeSort(leftArray);
  const rightArraySorted = mergeSort(rightArray);

  return mergeArrays(leftArraySorted, rightArraySorted);
}
