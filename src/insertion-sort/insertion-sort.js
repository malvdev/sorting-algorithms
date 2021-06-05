/**
 * Worst Case   Θ(n^2)
 * Average Case Θ(n^2)
 * Best Case    Ω(n)
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const value = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > value) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = value;
  }

  return array;
}

module.exports = insertionSort;
