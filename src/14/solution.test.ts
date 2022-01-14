import { maxSubArrayOfSizeK } from "./solution";

describe("Question 14", () => {
  let actual: number;
  let expected: number;
  test("Test 14.1", () => {
    actual = maxSubArrayOfSizeK([2, 1, 5, 1, 3, 2], 3);
    expected = 9;
    expect(actual).toBe(expected);
  });

  test("Test 14.2", () => {
    actual = maxSubArrayOfSizeK([2, 3, 4, 1, 5], 2);
    expected = 7;
    expect(actual).toBe(expected);
  });
});
