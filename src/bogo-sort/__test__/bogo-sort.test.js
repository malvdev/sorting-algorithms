import bogoSort from '../bogo-sort';
import { arrSmall, arrSmallSorted, reverseArrSmall } from '../../sortTester';

describe('Bogo sort', () => {
  test('should sort array', () => {
    expect(bogoSort([])).toEqual([]);
    expect(bogoSort([1])).toEqual([1]);
    expect(bogoSort([1, 2])).toEqual([1, 2]);
    expect(bogoSort([2, 1])).toEqual([1, 2]);
    expect(bogoSort(arrSmall)).toEqual(arrSmallSorted);
    expect(bogoSort(reverseArrSmall)).toEqual(arrSmallSorted);
  });
});
