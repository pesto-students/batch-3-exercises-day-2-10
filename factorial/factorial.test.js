import factorial from './factorial';

describe('factorial', () => {
  test('should return a number', () => {
    //expect(typeof factorial(0)).toEqual('number');
    expect(factorial(5)).toBe(120);
    expect(factorial(20)).toBe(2432902008176640000);
  });
});
