import quickSort from '../quick-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sortTester';

describe('Quick sort', () => {
  test('should sort array', () => {
    expect(quickSort([])).toEqual([]);
    expect(quickSort([1])).toEqual([1]);
    expect(quickSort([1, 2])).toEqual([1, 2]);
    expect(quickSort([2, 1])).toEqual([1, 2]);
    expect(quickSort(arr)).toEqual(arrSorted);
    expect(quickSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(quickSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
