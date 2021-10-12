import { highestProductOf3 } from "./solution";

describe("Question 3", () => {
  let actual: number;
  let expected: number;

  test("short array", () => {
    actual = highestProductOf3([1, 2, 3, 4]);
    expected = 24;
    expect(actual).toBe(expected);
  });

  test("longer array", () => {
    actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
    expected = 336;
    expect(actual).toBe(expected);
  });

  test("array has one negative", () => {
    actual = highestProductOf3([-5, 4, 8, 2, 3]);
    expected = 96;
    expect(actual).toBe(expected);
  });

  test("array has two negatives", () => {
    actual = highestProductOf3([-10, 1, 3, 2, -10]);
    expected = 300;
    expect(actual).toBe(expected);
  });

  test("array is all negatives", () => {
    actual = highestProductOf3([-5, -1, -3, -2]);
    expected = -6;
    expect(actual).toBe(expected);
  });

  test("error with empty array", () => {
    expect(() => highestProductOf3([])).toThrowError();
  });

  test("error with one number", () => {
    expect(() => highestProductOf3([1])).toThrowError();
  });

  test("error with two numbers", () => {
    expect(() => highestProductOf3([1, 1])).toThrowError();
  });
});
