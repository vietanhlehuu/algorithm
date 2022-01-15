import { longestSubstringWithKDistinct } from "./solution";

describe("Question 16", () => {
  test("Test 16.1", () => {
    const actual = longestSubstringWithKDistinct("araaci", 2);
    const expected = 4;
    expect(actual).toBe(expected);
  });

  test("Test 16.2", () => {
    const actual = longestSubstringWithKDistinct("araaci", 1);
    const expected = 2;
    expect(actual).toBe(expected);
  });

  test("Test 16.3", () => {
    const actual = longestSubstringWithKDistinct("cbbebi", 3);
    const expected = 5;
    expect(actual).toBe(expected);
  });

  test("Test 16.4", () => {
    const actual = longestSubstringWithKDistinct("cbbebi", 10);
    const expected = 6;
    expect(actual).toBe(expected);
  });
});
