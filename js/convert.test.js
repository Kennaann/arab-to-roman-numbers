/**
 * @jest-environment jsdom
 */

const functions = require("./main");

const { convertArabToRoman, convertRomanToArab } = functions;

// Arab to Roman //

test("convert 1 to I", () => {
  expect(convertArabToRoman(1)).toBe("I");
});

test("convert 5 to V", () => {
  expect(convertArabToRoman(5)).toBe("V");
});

test("convert invalid number return null", () => {
  expect(convertArabToRoman(73)).toBeNull();
});

// Roman to Arab //

test("convert I to 1", () => {
  expect(convertRomanToArab("I")).toBe("1");
});

test("convert III to 3", () => {
  expect(convertRomanToArab("III")).toBe("3");
});

test("convert V to 5", () => {
  expect(convertRomanToArab("V")).toBe("5");
});

test("convert invalid number return null", () => {
  expect(convertRomanToArab("LV")).toBeNull();
});
