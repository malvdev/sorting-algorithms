import selectionSort from '../selection-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sortTester';

describe('Selection sort', () => {
  test('should sort array', () => {
    expect(selectionSort([])).toEqual([]);
    expect(selectionSort([1])).toEqual([1]);
    expect(selectionSort([1, 2])).toEqual([1, 2]);
    expect(selectionSort([2, 1])).toEqual([1, 2]);
    expect(selectionSort(arr)).toEqual(arrSorted);
    expect(selectionSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(selectionSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
