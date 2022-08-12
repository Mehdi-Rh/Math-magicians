import operate from './operate';

describe('Add operation', () => {
  test('Two positive numbers', () => {
    expect(operate(4, 2, '+')).toBe('6');
  });
});
