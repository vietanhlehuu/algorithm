import { findStringAnagrams } from "./solution";

describe("Question 21", () => {
  test("Test 21.1", () => {
    const actual = findStringAnagrams("ppqp", "pq");
    const expected = [1, 2];

    expect(actual).toEqual(expected);
  });

  test("Test 21.2", () => {
    const actual = findStringAnagrams("abbcabc", "abc");
    const expected = [2, 3, 4];

    expect(actual).toEqual(expected);
  });
});
