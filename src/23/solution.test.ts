import { findSubstring } from "./solution";

describe("Question 23", () => {
  test("Test 23.1", () => {
    const actual = findSubstring("catfoxcat", ["cat", "fox"]);
    const expected = [0, 3];

    expect(actual).toEqual(expected);
  });

  test("Test 23.2", () => {
    const actual = findSubstring("catcatfoxfox", ["cat", "fox"]);
    const expected = [3];

    expect(actual).toEqual(expected);
  });

  test("Test 23.3", () => {
    const actual = findSubstring("barfoothefoobarman", ["foo", "bar"]);
    const expected = [0, 9];

    expect(actual).toEqual(expected);
  });

  test("Test 23.4", () => {
    const actual = findSubstring("wordgoodgoodgoodbestword", [
      "word",
      "good",
      "best",
      "word",
    ]);
    const expected: number[] = [];

    expect(actual).toEqual(expected);
  });

  test("Test 23.5", () => {
    const actual = findSubstring("barfoofoobarthefoobarman", [
      "bar",
      "foo",
      "the",
    ]);
    const expected = [6, 9, 12];

    expect(actual).toEqual(expected);
  });

  test("Test 23.6", () => {
    const actual = findSubstring(
      "lingmindraboofooowingdingbarrwingmonkeypoundcake",
      ["fooo", "barr", "wing", "ding", "wing"]
    );
    const expected = [13];

    expect(actual).toEqual(expected);
  });
});
