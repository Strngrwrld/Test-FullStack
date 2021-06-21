import { roman_to_arabic } from "../index.js";

describe("Transform roman to arabic", () => {
  test("Valid empty input", () => {
    expect(roman_to_arabic("")).toBe("It´s not a valid roman number");
  });

  test("Valid not arabic input", () => {
    expect(roman_to_arabic(1)).toBe("It´s not a valid roman number");
  });

  test("Valid roman number input", () => {
    expect(roman_to_arabic("ABC")).toBe("It´s not a valid roman number");
  });

  test("Test - Input: DCM | Output: It´s not a valid roman number", () => {
    expect(roman_to_arabic("CMLVX")).toBe("It´s not a valid roman number");
  });

  test("Test - Input: XXI | Output: 21", () => {
    expect(roman_to_arabic("xxi")).toBe(21);
  });

  test("Test - Input: XL | Output: 40", () => {
    expect(roman_to_arabic("XL")).toBe(40);
  });

  test("Test - Input: LVIII | Output: 1235", () => {
    expect(roman_to_arabic("MCCXXXV")).toBe(1235);
  });

  test("Test - Input: CDLIV | Output: 454", () => {
    expect(roman_to_arabic("CDLIV")).toBe(454);
  });
});
