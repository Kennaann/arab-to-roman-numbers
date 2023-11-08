const arabicToRoman = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  11: "XI",
  12: "XII",
  13: "XIII",
  14: "XIV",
  15: "XV",
  16: "XVI",
  17: "XVII",
  18: "XVIII",
  19: "XIX",
  20: "XX",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

const convertArabToRoman = (number) => arabicToRoman[number] || null;
const convertRomanToArab = (number) => {
  let converted;

  for (const [key, value] of Object.entries(arabicToRoman)) {
    if (value == number) {
      converted = key;
    }
  }

  return converted || null;
};

const numberInput = document.getElementById("number");

numberInput?.addEventListener("keypress", (e) => {
  if (e.key !== "Enter") {
    return;
  }

  const resultEl = document.getElementsByClassName("result")[0];
  const convertedNumber = convertRomanToArab(e.target.value);

  resultEl.innerHTML = convertedNumber;
});

module.exports = { convertArabToRoman, convertRomanToArab };
