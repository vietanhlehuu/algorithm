import { getMaxProfit } from "./solution";

describe("Question 1", () => {
  test("price goes up then down", () => {
    let actual = getMaxProfit([1, 5, 3, 2]);
    let expected = 4;
    expect(actual).toBe(expected);
  });

  test("price goes down then up", () => {
    let actual = getMaxProfit([7, 2, 8, 9]);
    let expected = 7;
    expect(actual).toBe(expected);
  });

  test("price goes up all day", () => {
    let actual = getMaxProfit([1, 6, 7, 9]);
    let expected = 8;
    expect(actual).toBe(expected);
  });

  test("price goes down all day", () => {
    let actual = getMaxProfit([9, 7, 4, 1]);
    let expected = -2;
    expect(actual).toBe(expected);
  });

  test("price stays the same all day", () => {
    let actual = getMaxProfit([1, 1, 1, 1]);
    let expected = 0;
    expect(actual).toBe(expected);
  });

  test("error with empty prices", () => {
    expect(() => getMaxProfit([])).toThrowError();
  });

  test("error with one price", () => {
    expect(() => getMaxProfit([1])).toThrowError();
  });
});
