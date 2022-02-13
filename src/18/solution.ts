export const lengthOfLongestSubstring = function (
  str: string,
  k: number
): number {
  let start = 0,
    end = 0,
    maxRepeatChar = 0,
    maxLength = 0;
  const map = new Map<string, number>();

  while (end < str.length) {
    const curChar = str[end];
    // if the current char is not in the map, add it
    if (!map.has(curChar)) {
      map.set(curChar, 0);
    }
    // increment the count of the current char
    map.set(curChar, map.get(curChar)! + 1);
    maxRepeatChar = Math.max(maxRepeatChar, map.get(curChar)!);

    // this mean we can not fill k chars to get the max length, we have to shrink the window
    if (end - start + 1 - maxRepeatChar > k) {
      // remove the first char to move window to a new position
      const firstChar = str[start];
      map.set(firstChar, map.get(firstChar)! - 1);
      start++;
    }

    // each loop, we can get the max length, it is the length of the current window
    maxLength = Math.max(maxLength, end - start + 1);

    end++;
  }

  return maxLength;
};
