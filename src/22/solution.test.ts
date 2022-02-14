import { findSubstring } from "./solution";

describe("Question 22", () => {
  test("Test 22.1", () => {
    const actual = findSubstring("aabdec", "abc");
    const expected = "abdec";

    expect(actual).toBe(expected);
  });

  test("Test 22.2", () => {
    const actual = findSubstring("abdbca", "abc");
    const expected = "bca";

    expect(actual).toBe(expected);
  });

  test("Test 22.3", () => {
    const actual = findSubstring("adcad", "abc");
    const expected = "";

    expect(actual).toBe(expected);
  });

  test("Test 22.3", () => {
    const actual = findSubstring("adfaeffedcb", "deff");
    const expected = "ffed";

    expect(actual).toBe(expected);
  });
});
