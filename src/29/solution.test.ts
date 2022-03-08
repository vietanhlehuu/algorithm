import { threeSumClosest } from "./solution";

describe("Question 29", () => {
  test("Test 29.1", () => {
    const actual = threeSumClosest([-1, 2, 1, -4], 1);
    const expected = 2;

    expect(actual).toBe(expected);
  });

  test("Test 29.2", () => {
    const actual = threeSumClosest([0, 0, 0], 1);
    const expected = 0;

    expect(actual).toBe(expected);
  });

  test("Test 29.3", () => {
    const actual = threeSumClosest([1, 2, 4, 8, 16, 32, 64, 128], 82);
    const expected = 82;

    expect(actual).toBe(expected);
  });
});
