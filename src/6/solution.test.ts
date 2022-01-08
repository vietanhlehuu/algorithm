import { findSumOfThree } from "./solution";

describe("Question 6", () => {
  let actual: boolean, expected: boolean;
  // error case: array does not contain enough elements
  // other cases:
  test("Test 6.1", () => {
    actual = findSumOfThree([1, 2, 3, 4, 5], 5);
    expected = false;
    expect(actual).toBe(expected);
  });
  test("Test 6.2", () => {
    actual = findSumOfThree([1, 2, 3, 4, 5], 6);
    expected = true;
    expect(actual).toBe(expected);
  });
  test("Test 6.3", () => {
    actual = findSumOfThree([1, 2, 3, 4, 5], 7);
    expected = true;
    expect(actual).toBe(expected);
  });
  test("Test 6.4", () => {
    actual = findSumOfThree([1, 2, 3, 4, 6], 14);
    expected = false;
    expect(actual).toBe(expected);
  });
});
