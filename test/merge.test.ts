import { merge } from '../src/merge';

describe('merge function', () => {
  test('test three sorted arrays correctly', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [7, 5, 3];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 3, 4, 5, 5, 6, 7])
  });

  test('test when first array or second array is empty', () => {
    const collection_1 = [1, 2, 3];
    const collection_2: number[] = [];
    const collection_3 = [6, 2];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 2, 3, 6])
  });

  test('test when thrid array is empty', () => {
    const collection_1 = [1, 2, 3];
    const collection_2 = [2, 4];
    const collection_3 : number[] =[];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 2, 3, 4])
  });

  test('test when all arrays are empty', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([])
  });
});
