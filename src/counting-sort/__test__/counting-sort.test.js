import countingSort from '../counting-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sort-tester';

describe('Counting sort', () => {
  test('should sort array', () => {
    expect(countingSort([])).toEqual([]);
    expect(countingSort([1])).toEqual([1]);
    expect(countingSort([1, 2])).toEqual([1, 2]);
    expect(countingSort([2, 1])).toEqual([1, 2]);
    expect(countingSort(arr)).toEqual(arrSorted);
    expect(countingSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(countingSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
