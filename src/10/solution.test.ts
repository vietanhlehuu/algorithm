import { coinChange, coinChangeTopDown } from "./solution";

describe("Question 10", () => {
  let actual: number;
  let expected: number;

  test("Test 10.1", () => {
    actual = coinChange([1, 2, 5], 11);
    expected = 3;
    expect(actual).toBe(expected);
    actual = coinChangeTopDown([1, 2, 5], 11);
    expected = 3;
    expect(actual).toBe(expected);
  });

  test("Test 10.2", () => {
    actual = coinChange([2], 3);
    expected = -1;
    expect(actual).toBe(expected);
    actual = coinChangeTopDown([2], 3);
    expected = -1;
    expect(actual).toBe(expected);
  });

  test("Test 10.3", () => {
    actual = coinChange([1], 0);
    expected = 0;
    expect(actual).toBe(expected);
    actual = coinChangeTopDown([1], 0);
    expected = 0;
    expect(actual).toBe(expected);
  });

  test("Test 10.4", () => {
    actual = coinChange([186, 419, 83, 408], 6249);
    expected = 20;
    expect(actual).toBe(expected);
    actual = coinChangeTopDown([186, 419, 83, 408], 6249);
    expected = 20;
    expect(actual).toBe(expected);
  });

  test("Test 10.5", () => {
    actual = coinChange(
      [411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422],
      9864
    );
    expected = 24;
    expect(actual).toBe(expected);
    actual = coinChangeTopDown(
      [411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422],
      9864
    );
    expected = 24;
    expect(actual).toBe(expected);
  });
});
