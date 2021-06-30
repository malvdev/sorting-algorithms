import insertionSort from '../insertion-sort/insertion-sort';

export default function bucketSort(array, bucketSize = 5) {
  if (array.length <= 1) {
    return array;
  }

  const minValue = Math.min(...array);
  const maxValue = Math.max(...array);

  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const bucketsArray = new Array(bucketCount);

  for (let i = 0; i < bucketsArray.length; i += 1) {
    bucketsArray[i] = [];
  }

  for (let i = 0; i < array.length; i += 1) {
    bucketsArray[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }

  array = [];

  for (let i = 0; i < bucketsArray.length; i += 1) {
    insertionSort(bucketsArray[i]);

    for (let j = 0; j < bucketsArray[i].length; j += 1) {
      array.push(bucketsArray[i][j]);
    }
  }

  return array;
}
