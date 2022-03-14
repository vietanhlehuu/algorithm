import { findUnsortedSubarray } from "./solution";

describe("Question 33", () => {
  test("Test 33.1", () => {
    const actual = findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]);
    const expected = 5;

    expect(actual).toBe(expected);
  });

  test("Test 33.2", () => {
    const actual = findUnsortedSubarray([1, 2, 3, 4]);
    const expected = 0;

    expect(actual).toBe(expected);
  });

  test("Test 33.3", () => {
    const actual = findUnsortedSubarray([1, 3, 2, 2, 2]);
    const expected = 4;

    expect(actual).toBe(expected);
  });

  test("Test 33.4", () => {
    const actual = findUnsortedSubarray([1, 2, 4, 5, 3]);
    const expected = 3;

    expect(actual).toBe(expected);
  });

  test("Test 33.5", () => {
    const actual = findUnsortedSubarray([2, 3, 3, 2, 4]);
    const expected = 3;

    expect(actual).toBe(expected);
  });
});
