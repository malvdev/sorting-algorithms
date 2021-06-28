import stoogeSort from '../stooge-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sort-tester';

describe('Stooge sort', () => {
  test('should sort array', () => {
    expect(stoogeSort([])).toEqual([]);
    expect(stoogeSort([1])).toEqual([1]);
    expect(stoogeSort([1, 2])).toEqual([1, 2]);
    expect(stoogeSort([2, 1])).toEqual([1, 2]);
    expect(stoogeSort(arr)).toEqual(arrSorted);
    expect(stoogeSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(stoogeSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
