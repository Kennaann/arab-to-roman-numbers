const romanToArabic = {
  I: 1,
  II: 2,
  III: 3,
  IV: 4,
  V: 5,
  VI: 6,
  VII: 7,
  VIII: 8,
  IX: 9,
  X: 10,
  XI: 11,
  XII: 12,
  XIII: 13,
  XIV: 14,
  XV: 15,
  XVI: 16,
  XVII: 17,
  XVIII: 18,
  XIX: 19,
  XX: 20,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  O: 0,
};

const convertRomanToArabNumbers = (number) => {
  if (romanToArabic[number] === 0) {
    return romanToArabic[number];
  }

  return romanToArabic[number] || null;
};

module.exports = {
  convertRomanToArabNumbers,
};
