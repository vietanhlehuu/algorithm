import { findPeakElement } from "./solution";

describe("Question 25", () => {
  test("Test 25.1", () => {
    const actual = findPeakElement([1, 2, 3, 1]);
    const expected = [2];

    expect(expected).toContain(actual);
  });

  test("Test 25.2", () => {
    const actual = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
    const expected = [1, 5];

    expect(expected).toContain(actual);
  });
});
