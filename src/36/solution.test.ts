import { insert } from "./solution";

describe("Question 36", () => {
  test("Test 36.1", () => {
    const actual = insert(
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5]
    );
    const expected = [
      [1, 5],
      [6, 9],
    ];

    expect(actual).toEqual(expected);
  });

  test("Test 36.2", () => {
    const actual = insert(
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8]
    );
    const expected = [
      [1, 2],
      [3, 10],
      [12, 16],
    ];

    expect(actual).toEqual(expected);
  });

  test("Test 36.3", () => {
    const actual = insert([[1, 5]], [2, 3]);
    const expected = [[1, 5]];

    expect(actual).toEqual(expected);
  });

  test("Test 36.4", () => {
    const actual = insert(
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8]
    );
    const expected = [
      [1, 2],
      [3, 10],
      [12, 16],
    ];

    expect(actual).toEqual(expected);
  });
});
