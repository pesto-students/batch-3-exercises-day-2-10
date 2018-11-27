import { yourName } from './yourName';

describe('Write your name in the test', () => {
  test('should retur name', ()=>{
    expect(yourName()).toBe('Ankaj Goyal');
  });
});
