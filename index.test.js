const add = require('./index.js');

test(`should return zero on an empty string.`, () => {
    expect(add(``)).toBe(0);
});