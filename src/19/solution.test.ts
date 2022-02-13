import { lengthOfLongestOne } from "./solution";

describe("Question 19", () => {
  test("Test 19.1", () => {
    const actual = lengthOfLongestOne([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2);
    const expected = 6;

    expect(actual).toBe(expected);
  });

  test("Test 19.2", () => {
    const actual = lengthOfLongestOne(
      [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      3
    );
    const expected = 9;

    expect(actual).toBe(expected);
  });

  test("Test 19.3", () => {
    const actual = lengthOfLongestOne([0, 1, 1, 1, 0, 0, 1, 1], 2);
    const expected = 7;

    expect(actual).toBe(expected);
  });
});
