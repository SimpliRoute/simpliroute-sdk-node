import sum from './sum';

describe('Sum Test', () => {
    it('Must return expected sum of 5 to 1 and 4 input', () => {
        expect(sum(1, 4)).toBe(5);
    });
});
