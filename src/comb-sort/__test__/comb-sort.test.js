import combSort from '../comb-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sort-tester';

describe('Comb sort', () => {
  test('should sort array', () => {
    expect(combSort([])).toEqual([]);
    expect(combSort([1])).toEqual([1]);
    expect(combSort([1, 2])).toEqual([1, 2]);
    expect(combSort([2, 1])).toEqual([1, 2]);
    expect(combSort(arr)).toEqual(arrSorted);
    expect(combSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(combSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
