import operate from './operate';

describe('Add operation', () => {
  test('Two positive numbers', () => {
    expect(operate(4, 2, '+')).toBe('6');
  });
});

describe('Substract operation', () => {
  test('Two positive numbers', () => {
    expect(operate(8, 4, '-')).toBe('4');
  });
});
