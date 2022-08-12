import calculate from './calculate';

describe('AC button test', () => {
  test('AC button', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(obj, 'AC');

    const expected = {
      total: 0,
      next: null,
      operation: null,
    };

    expect(result).toEqual(expected);
  });
});
