export function isPalindrome(str: string): boolean {
  return checkPalindrome(str, 0, str.length - 1);
}

function checkPalindrome(
  str: string,
  startIdx: number,
  endIdx: number
): boolean {
  if (startIdx > endIdx) {
    return true;
  }
  if (startIdx >= endIdx) {
    return true;
  }
  if (str[startIdx] === str[endIdx]) {
    return checkPalindrome(str, startIdx + 1, endIdx - 1);
  }
  return false;
}
