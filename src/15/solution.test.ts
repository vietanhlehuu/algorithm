import { smallestSubArraySum } from "./solution";

describe("Question 15", () => {
  let actual: number;
  let expected: number;
  test("Test 15.1", () => {
    actual = smallestSubArraySum(7, [2, 1, 5, 2, 3, 2]);
    expected = 2;
    expect(actual).toBe(expected);
  });

  test("Test 15.2", () => {
    actual = smallestSubArraySum(7, [2, 1, 5, 2, 8]);
    expected = 1;
    expect(actual).toBe(expected);
  });

  test("Test 15.3", () => {
    actual = smallestSubArraySum(8, [3, 4, 1, 1, 6]);
    expected = 3;
    expect(actual).toBe(expected);
  });

  test("Test 15.4", () => {
    actual = smallestSubArraySum(15, [1, 2, 3, 2, 5]);
    expected = 0;
    expect(actual).toBe(expected);
  });
});
