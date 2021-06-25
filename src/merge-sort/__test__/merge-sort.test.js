import mergeSort from '../merge-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sortTester';

describe('Merge sort', () => {
  test('should sort array', () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([1, 2])).toEqual([1, 2]);
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort(arr)).toEqual(arrSorted);
    expect(mergeSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(mergeSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
