export default function countingSort(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const count = [];

  for (let i = min; i <= max; i += 1) {
    count[i] = 0;
  }

  for (let i = 0; i < array.length; i += 1) {
    count[array[i]] += 1;
  }

  let j = 0;

  for (let i = min; i <= max; i += 1) {
    while (count[i] > 0) {
      array[j] = i;
      j += 1;
      count[i] -= 1;
    }
  }

  return array;
}
