import gnomeSort from '../gnome-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sortTester';

describe('Gnome sort', () => {
  test('should sort array', () => {
    expect(gnomeSort([])).toEqual([]);
    expect(gnomeSort([1])).toEqual([1]);
    expect(gnomeSort([1, 2])).toEqual([1, 2]);
    expect(gnomeSort([2, 1])).toEqual([1, 2]);
    expect(gnomeSort(arr)).toEqual(arrSorted);
    expect(gnomeSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(gnomeSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
