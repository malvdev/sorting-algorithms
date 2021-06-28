import pancakeSort from '../pancake-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sort-tester';

describe('Pancake sort', () => {
  test('should sort array', () => {
    expect(pancakeSort([])).toEqual([]);
    expect(pancakeSort([1])).toEqual([1]);
    expect(pancakeSort([1, 2])).toEqual([1, 2]);
    expect(pancakeSort([2, 1])).toEqual([1, 2]);
    expect(pancakeSort(arr)).toEqual(arrSorted);
    expect(pancakeSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(pancakeSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
