const add = (a, b) => a + b;
const users = ['Damian', 'Kamil'];

describe('Index Component', () => {
    it('Adds two values', () => {
        expect(add(2, 4)).toBe(6);
    });

    it('Check if users exists', () => {
        expect(users).toContain('Damian');
    });
});
