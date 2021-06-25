import shellSort from '../shell-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sortTester';

describe('Shell sort', () => {
  test('should sort array', () => {
    expect(shellSort([])).toEqual([]);
    expect(shellSort([1])).toEqual([1]);
    expect(shellSort([1, 2])).toEqual([1, 2]);
    expect(shellSort([2, 1])).toEqual([1, 2]);
    expect(shellSort(arr)).toEqual(arrSorted);
    expect(shellSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(shellSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
