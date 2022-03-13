import { backspaceCompare } from "./solution";

describe("Question 32", () => {
  test("Test 32.1", () => {
    const actual = backspaceCompare("ab#c", "ad#c");
    const expected = true;

    expect(actual).toBe(expected);
  });

  test("Test 32.2", () => {
    const actual = backspaceCompare("ab##", "c#d#");
    const expected = true;

    expect(actual).toBe(expected);
  });

  test("Test 32.3", () => {
    const actual = backspaceCompare("a##c", "#a#c");
    const expected = true;

    expect(actual).toBe(expected);
  });

  test("Test 32.4", () => {
    const actual = backspaceCompare("a#c", "b");
    const expected = false;

    expect(actual).toBe(expected);
  });
});
