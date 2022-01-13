import { moveZerosToLeft } from "./solution";

describe("Question 13", () => {
  test("Test 13.1", () => {
    const input = [1, 10, 20, 0, 59, 63, 0, 88, 0];
    const output = [0, 0, 0, 1, 10, 20, 59, 63, 88];

    moveZerosToLeft(input);
    expect(input).toEqual(output);
  });

  test("Test 13.2", () => {
    const input = [1, 2, 3, 4, 5, 6, 0, 0, 0, 0];
    const output = [0, 0, 0, 0, 1, 2, 3, 4, 5, 6];

    moveZerosToLeft(input);
    expect(input).toEqual(output);
  });

  test("Test 13.3", () => {
    const input = [0, 0, 0, 0];
    const output = [0, 0, 0, 0];

    moveZerosToLeft(input);
    expect(input).toEqual(output);
  });
});
