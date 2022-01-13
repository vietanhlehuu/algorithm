import { isPalindrome } from "./solution";

describe("Question 11", () => {
  let actual: boolean;
  let expected: boolean;

  test("Test 11.1", () => {
    actual = isPalindrome("asdfghjxcvbn");
    expected = false;

    expect(actual).toBe(expected);
  });

  test("Test 11.2", () => {
    actual = isPalindrome("madam");
    expected = true;

    expect(actual).toBe(expected);
  });

  test("Test 11.3", () => {
    actual = isPalindrome("a");
    expected = true;

    expect(actual).toBe(expected);
  });
});
