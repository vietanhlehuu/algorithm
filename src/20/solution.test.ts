import { findPermutation } from "./solution";

describe("Question 20", () => {
  test("Test 20.1", () => {
    const actual = findPermutation("oidbcaf", "abc");
    const expected = true;

    expect(actual).toBe(expected);
  });

  test("Test 20.2", () => {
    const actual = findPermutation("odicf", "dc");
    const expected = false;

    expect(actual).toBe(expected);
  });

  test("Test 20.3", () => {
    const actual = findPermutation("bcdxabcdy", "bcdyabcdx");
    const expected = true;

    expect(actual).toBe(expected);
  });

  test("Test 20.4", () => {
    const actual = findPermutation("aaacb", "abc");
    const expected = true;

    expect(actual).toBe(expected);
  });
});
