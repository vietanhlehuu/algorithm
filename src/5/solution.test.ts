import { changePossibilities, changePossibilitiesBottomUp } from "./solution";

describe("Question 5", () => {
  let actual: number, expected: number;

  test.only("sample input", () => {
    actual = changePossibilities(4, [1, 2, 3]);
    expected = 4;
    expect(actual).toBe(expected);
    actual = changePossibilitiesBottomUp(4, [1, 2, 3]);
    expect(actual).toBe(expected);
  });

  test("one way to make zero cents", () => {
    actual = changePossibilities(0, [1, 2]);
    expected = 1;
    expect(actual).toBe(expected);
    actual = changePossibilitiesBottomUp(0, [1, 2]);
    expect(actual).toBe(expected);
  });

  test("no ways if no coins", () => {
    actual = changePossibilities(1, []);
    expected = 0;
    expect(actual).toBe(expected);
    actual = changePossibilitiesBottomUp(1, []);
    expect(actual).toBe(expected);
  });

  test("big coin value", () => {
    actual = changePossibilities(5, [25, 50]);
    expected = 0;
    expect(actual).toBe(expected);
    actual = changePossibilitiesBottomUp(5, [25, 50]);
    expect(actual).toBe(expected);
  });

  test("big target amount", () => {
    actual = changePossibilities(50, [5, 10]);
    expected = 6;
    expect(actual).toBe(expected);
    actual = changePossibilitiesBottomUp(50, [5, 10]);
    expect(actual).toBe(expected);
  });

  test("change for one dollar", () => {
    actual = changePossibilities(100, [1, 5, 10, 25, 50]);
    expected = 292;
    expect(actual).toBe(expected);
    actual = changePossibilitiesBottomUp(100, [1, 5, 10, 25, 50]);
    expect(actual).toBe(expected);
  });
});
