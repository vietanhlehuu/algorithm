import { searchPosition } from "./solution";

describe("Question 9", () => {
  let actual: number;
  let expected: number;

  test("Test 9.1", () => {
    const input = [
      88, 99, 107, 120, 133, 155, 1, 10, 20, 47, 59, 63, 75, 76, 77,
    ];
    actual = searchPosition(input, 10);
    expected = 7;
    expect(actual).toBe(expected);
  });

  test("Test 9.2", () => {
    const input = [1, 2, 3, 4, 5];
    actual = searchPosition(input, 2);
    expected = 1;
    expect(actual).toBe(expected);
  });

  test("Test 9.3", () => {
    const input = [2, 1];
    actual = searchPosition(input, 2);
    expected = 0;
    expect(actual).toBe(expected);
  });

  test("Test 9.4", () => {
    const input = [3, 1, 2];
    actual = searchPosition(input, 1);
    expected = 1;
    expect(actual).toBe(expected);
  });

  test("Test 9.4", () => {
    const input = [3, 1, 2];
    actual = searchPosition(input, 4);
    expected = -1;
    expect(actual).toBe(expected);
  });
});
