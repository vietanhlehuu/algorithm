import { threeSum } from "./solution";

describe("Question 28", () => {
  test("Test 28.1", () => {
    const actual = threeSum([-1, 0, 1, 2, -1, -4]);
    const expected = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];

    expect(actual).toEqual(expected);
  });

  test("Test 28.2", () => {
    const actual = threeSum([]);
    const expected = [] as any;

    expect(actual).toEqual(expected);
  });

  test("Test 28.3", () => {
    const actual = threeSum([0, 0, 0]);
    const expected = [[0, 0, 0]];

    expect(actual).toEqual(expected);
  });

  test("Test 28.4", () => {
    const actual = threeSum([0]);
    const expected = [] as any;

    expect(actual).toEqual(expected);
  });

  test("Test 28.5", () => {
    const actual = threeSum([-2, 0, 1, 1, 2]);
    const expected = [
      [-2, 0, 2],
      [-2, 1, 1],
    ];

    expect(actual).toEqual(expected);
  });
});
