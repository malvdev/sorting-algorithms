import insertionSort from '../insertion-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sortTester';

describe('Insertion sort', () => {
  test('should sort array', () => {
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([1])).toEqual([1]);
    expect(insertionSort([1, 2])).toEqual([1, 2]);
    expect(insertionSort([2, 1])).toEqual([1, 2]);
    expect(insertionSort(arr)).toEqual(arrSorted);
    expect(insertionSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(insertionSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
