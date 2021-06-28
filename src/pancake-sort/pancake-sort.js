export default function pancakeSort(array) {
  for (let i = array.length - 1; i >= 1; i -= 1) {
    let maxIdx = 0;
    let max = array[0];

    for (let j = 1; j <= i; j += 1) {
      if (array[j] > max) {
        max = array[j];
        maxIdx = j;
      }
    }

    if (maxIdx !== i) {
      let newArray;

      if (maxIdx > 0) {
        newArray = array.slice(0, maxIdx + 1).reverse();

        for (let j = 0; j <= maxIdx; j += 1) {
          array[j] = newArray[j];
        }
      }

      newArray = array.slice(0, i + 1).reverse();

      for (let j = 0; j <= i; j += 1) {
        array[j] = newArray[j];
      }
    }
  }

  return array;
}
