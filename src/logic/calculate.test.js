import calculate from './calculate';

describe('Calculate test', () => {
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
  test('-/+ Button', () => {
    let obj = calculate({}, '3');
    obj = calculate(obj, '+');
    obj = calculate(obj, '3');
    obj = calculate(obj, '=');
    obj = calculate(obj, '+/-');
    const result = obj;
    const expected = { total: '-6', next: null, operation: null };
    expect(result).toEqual(expected);
  });
  test('Add 2 + 5', () => {
    let obj = calculate({}, '2');
    obj = calculate(obj, '+');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    const result = obj;
    const expected = { total: '7', next: null, operation: null };
    expect(result).toEqual(expected);
  });

  test('2 * 5', () => {
    let obj = calculate({}, '2');
    obj = calculate(obj, 'x');
    obj = calculate(obj, '5');
    obj = calculate(obj, '=');
    const result = obj;
    const expected = { total: '10', next: null, operation: null };
    expect(result).toEqual(expected);
  });
});
