import bubbleSort from '../bubble-sort';
import {
  arr,
  arrSorted,
  negativeArr,
  negativeArrSorted,
  reverseArr,
} from '../../sortTester';

describe('Bubble sort', () => {
  test('should sort array', () => {
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([1])).toEqual([1]);
    expect(bubbleSort([1, 2])).toEqual([1, 2]);
    expect(bubbleSort([2, 1])).toEqual([1, 2]);
    expect(bubbleSort(arr)).toEqual(arrSorted);
    expect(bubbleSort(reverseArr)).toEqual(arrSorted);
  });

  test('should sort negative numbers', () => {
    expect(bubbleSort(negativeArr)).toEqual(negativeArrSorted);
  });
});
