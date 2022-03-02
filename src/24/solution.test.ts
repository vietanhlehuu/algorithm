import { sortColors } from "./solution";

describe("Question 24", () => {
  test("Test 24.1", () => {
    const arr = [2, 0, 2, 1, 1, 0];
    sortColors(arr);
    const expected = [0, 0, 1, 1, 2, 2];

    expect(arr).toEqual(expected);
  });

  test("Test 24.2", () => {
    const arr = [2, 0, 1];
    sortColors(arr);
    const expected = [0, 1, 2];

    expect(arr).toEqual(expected);
  });
});
