const convertService = require("./convertService");

const { convertRomanToArabNumbers } = convertService;

// Roman to Arab //

test("convert I to 1", () => {
  expect(convertRomanToArabNumbers("I")).toBe(1);
});

test("convert III to 3", () => {
  expect(convertRomanToArabNumbers("III")).toBe(3);
});

test("convert V to 5", () => {
  expect(convertRomanToArabNumbers("V")).toBe(5);
});

test("convert O to 0", () => {
  expect(convertRomanToArabNumbers("O")).toBe(0);
});

test("convert invalid number return null", () => {
  expect(convertRomanToArabNumbers("IIII")).toBeNull();
});
