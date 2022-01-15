import { nonRepeatSubstring } from "./solution";

describe("Question 17", () => {
  test("Test 17.1", () => {
    const actual = nonRepeatSubstring("aabccbb");
    const expected = 3;

    expect(actual).toBe(expected);
  });

  test("Test 17.2", () => {
    const actual = nonRepeatSubstring("bbabb");
    const expected = 2;

    expect(actual).toBe(expected);
  });

  test("Test 17.3", () => {
    const actual = nonRepeatSubstring("abccde");
    const expected = 3;

    expect(actual).toBe(expected);
  });

  test("Test 17.4", () => {
    const actual = nonRepeatSubstring("abcdeeefghjk");
    const expected = 6;

    expect(actual).toBe(expected);
  });
});
