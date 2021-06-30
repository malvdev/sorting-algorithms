import bucketSort from '../bucket-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sort-tester';

describe('Bucket sort', () => {
  test('should sort array', () => {
    expect(bucketSort([])).toEqual([]);
    expect(bucketSort([1])).toEqual([1]);
    expect(bucketSort([1, 2])).toEqual([1, 2]);
    expect(bucketSort([2, 1])).toEqual([1, 2]);
    expect(bucketSort(arr)).toEqual(arrSorted);
    expect(bucketSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(bucketSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
