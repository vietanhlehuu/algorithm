import { numSubarrayProductLessThanK } from "./solution";

describe("Question 31", () => {
  test("Test 31.1", () => {
    const actual = numSubarrayProductLessThanK([10, 5, 2, 6], 100);
    const expected = 8;

    expect(actual).toBe(expected);
  });

  test("Test 31.2", () => {
    const actual = numSubarrayProductLessThanK([1, 2, 3], 0);
    const expected = 0;

    expect(actual).toBe(expected);
  });

  test("Test 31.3", () => {
    const actual = numSubarrayProductLessThanK(
      [57, 44, 92, 28, 66, 60, 37, 33, 52, 38, 29, 76, 8, 75, 22],
      18
    );
    const expected = 1;

    expect(actual).toBe(expected);
  });

  test("Test 31.4", () => {
    const actual = numSubarrayProductLessThanK(
      [10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3],
      19
    );
    const expected = 18;

    expect(actual).toBe(expected);
  });
});
