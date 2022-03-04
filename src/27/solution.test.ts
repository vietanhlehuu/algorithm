import { sortedSquares } from "./solution";

describe("Question 27", () => {
  test("Test 27.1", () => {
    const actual = sortedSquares([-4, -1, 0, 3, 10]);
    const expected = [0, 1, 9, 16, 100];

    expect(actual).toEqual(expected);
  });

  test("Test 27.2", () => {
    const actual = sortedSquares([-7, -3, 2, 3, 11]);
    const expected = [4, 9, 9, 49, 121];

    expect(actual).toEqual(expected);
  });
});
