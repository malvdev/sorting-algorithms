export function isSorted(array) {
  for (let i = 1; i < array.length; i += 1) {
    if (array[i - 1] > array[i]) {
      return false;
    }
  }

  return true;
}

function shuffle(array) {
  let size = array.length;

  while (size > 0) {
    const randIndex = Math.floor(Math.random() * size);
    size -= 1;

    [array[size], array[randIndex]] = [array[randIndex], array[size]];
  }

  return array;
}

export default function bogoSort(array) {
  let sorted = false;

  while (!sorted) {
    array = shuffle(array);
    sorted = isSorted(array);
  }

  return array;
}
