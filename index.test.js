const add = require('./index.js');

test(`should return zero on an empty string.`, () => {
    expect(add(``)).toBe(0);
});

test(`should return 1 on an string with 1.`, () => {
    expect(add(`1`)).toBe(1);
});

test(`should return 3 on an string  with sum of 1 and 2.`, () => {
  expect(add(`1,2`)).toBe(3);
});

test(`should return 6 on an string  with sum of 1, 2 and 3.`, () => {
  expect(add(`1,2,3`)).toBe(6);
});
