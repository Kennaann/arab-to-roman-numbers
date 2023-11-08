/**
 * @jest-environment jsdom
 */

const convert = require('./main')

test('convert 1 to I', () => {
  expect(convert(1)).toBe("I");
});

test('convert 5 to V', () => {
  expect(convert(5)).toBe("V");
})

test('convert invalid number return null', () => {
  expect(convert(73)).toBeNull();
})