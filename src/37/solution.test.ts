import { intervalIntersection } from "./solution";

describe("Question 37", () => {
  test("Test 37.1", () => {
    const actual = intervalIntersection(
      [
        [0, 2],
        [5, 10],
        [13, 23],
        [24, 25],
      ],
      [
        [1, 5],
        [8, 12],
        [15, 24],
        [25, 26],
      ]
    );
    const expected = [
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25],
    ];

    expect(actual).toEqual(expected);
  });

  test("Test 37.2", () => {
    const actual = intervalIntersection(
      [
        [1, 3],
        [5, 9],
      ],
      []
    );
    const expected: number[][] = [];

    expect(actual).toEqual(expected);
  });

  test("Test 37.3", () => {
    const actual = intervalIntersection(
      [
        [1, 3],
        [5, 9],
      ],
      [
        [2, 3],
        [6, 7],
      ]
    );
    const expected = [
      [2, 3],
      [6, 7],
    ];

    expect(actual).toEqual(expected);
  });
});
