import { threeSumSmaller } from "./solution";

describe("Question 30", () => {
  test("Test 30.1", () => {
    const actual = threeSumSmaller([-1, 0, 2, 3], 3);
    const expected = 2;

    expect(actual).toBe(expected);
  });

  test("Test 30.2", () => {
    const actual = threeSumSmaller([-1, 4, 2, 1, 3], 5);
    const expected = 4;

    expect(actual).toBe(expected);
  });
});
