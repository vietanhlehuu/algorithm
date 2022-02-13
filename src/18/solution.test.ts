import { lengthOfLongestSubstring } from "./solution";

describe("Question 18", () => {
  test("Test 18.1", () => {
    const actual = lengthOfLongestSubstring("aabccbb", 2);
    const expected = 5;

    expect(actual).toBe(expected);
  });

  test("Test 18.2", () => {
    const actual = lengthOfLongestSubstring("abbcb", 1);
    const expected = 4;

    expect(actual).toBe(expected);
  });

  test("Test 18.3", () => {
    const actual = lengthOfLongestSubstring("abccde", 1);
    const expected = 3;

    expect(actual).toBe(expected);
  });

  test("Test 18.4", () => {
    const actual = lengthOfLongestSubstring("bbabcbabaaaaa", 3);
    const expected = 9;

    expect(actual).toBe(expected);
  });
});
