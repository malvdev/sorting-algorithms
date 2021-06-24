import shakerSort from '../shaker-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sortTester';

describe('Shaker sort', () => {
  test('should sort array', () => {
    expect(shakerSort([])).toEqual([]);
    expect(shakerSort([1])).toEqual([1]);
    expect(shakerSort([1, 2])).toEqual([1, 2]);
    expect(shakerSort([2, 1])).toEqual([1, 2]);
    expect(shakerSort(arr)).toEqual(arrSorted);
    expect(shakerSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(shakerSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
