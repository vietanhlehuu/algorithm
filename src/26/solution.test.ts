import { removeElement } from "./solution";

describe("Question 26", () => {
  test("Test 26.1", () => {
    const arr = [3, 2, 2, 3];
    const afterArr = [2, 2];
    const actual = removeElement(arr, 3);
    const expected = 2;

    expect(actual).toBe(expected);

    for (let i = 0; i < actual; i++) {
      expect(arr[i]).toBe(afterArr[i]);
    }
  });

  test("Test 26.2", () => {
    const arr = [0, 1, 2, 2, 3, 0, 4, 2];
    const afterArr = [0, 1, 3, 0, 4];
    const actual = removeElement(arr, 2);
    const expected = 5;

    expect(actual).toBe(expected);

    for (let i = 0; i < actual; i++) {
      expect(arr[i]).toBe(afterArr[i]);
    }
  });

  test("Test 26.3", () => {
    const arr = [1];
    const afterArr = [1];
    const actual = removeElement(arr, 1);
    const expected = 0;

    expect(actual).toBe(expected);

    for (let i = 0; i < actual; i++) {
      expect(arr[i]).toBe(afterArr[i]);
    }
  });

  test("Test 26.4", () => {
    const arr = [1, 2, 3, 4, 5];
    const afterArr = [1, 2, 3, 4, 5];
    const actual = removeElement(arr, 6);
    const expected = 5;

    expect(actual).toBe(expected);

    for (let i = 0; i < actual; i++) {
      expect(arr[i]).toBe(afterArr[i]);
    }
  });
});
