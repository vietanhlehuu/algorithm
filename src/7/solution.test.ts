import { findAllSum } from "./solution";

describe("Question 7", () => {
  let actual: number;
  let expeceted: number;

  test("Test 7.1", () => {
    const result = findAllSum(5);

    actual = result.length;
    expeceted = 6;
    expect(actual).toBe(expeceted);
  });

  test("Test 7.2", () => {
    const result = findAllSum(4);

    actual = result.length;
    expeceted = 4;
    expect(actual).toBe(expeceted);
  });

  test("Test 7.3", () => {
    const result = findAllSum(3);

    actual = result.length;
    expeceted = 2;
    expect(actual).toBe(expeceted);
  });

  test("Test 7.4", () => {
    const result = findAllSum(2);

    actual = result.length;
    expeceted = 1;
    expect(actual).toBe(expeceted);
  });

  test("Test 7.5", () => {
    const result = findAllSum(6);

    actual = result.length;
    expeceted = 10;
    expect(actual).toBe(expeceted);
  });
});

/**
 * 6 [1, 2, 3, 4, 5]
 * 1,1,1,1,1,1
 * 1,1,1,1,2
 * 1,1,1,3
 * 1,1,2,2
 * 1,2,3
 * 1,1,4
 * 1,5
 * 2,2,2
 * 2,4
 * 3,3
 */
