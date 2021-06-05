const insertionSort = require('./insertion-sort');

describe('Insertion sort', () => {
  test('empty input array', () => {
    expect(insertionSort([])).toEqual([]);
  });

  test('returns a sorted array', () => {
    expect(insertionSort([5, 6, 4, 1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('returns a sorted array with positive and negative numbers', () => {
    expect(insertionSort([4, 3, 6, 765, 23, -23, 1, 5, -65, 67, 9])).toEqual([
      -65, -23, 1, 3, 4, 5, 6, 9, 23, 67, 765,
    ]);
  });
});
