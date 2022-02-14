export const findStringAnagrams = function (
  str: string,
  pattern: string
): number[] {
  const resultIndexes: number[] = [];
  let start = 0,
    end = 0;

  const patternMap = new Map<string, number>();

  for (let idx = 0; idx < pattern.length; idx++) {
    const char = pattern[idx];
    if (!patternMap.has(char)) {
      patternMap.set(char, 0);
    }
    patternMap.set(char, patternMap.get(char)! + 1);
  }

  let distictMatchingSize = 0;

  while (end < str.length) {
    const curChar = str[end];

    if (patternMap.has(curChar)) {
      patternMap.set(curChar, patternMap.get(curChar)! - 1);
      if (patternMap.get(curChar) === 0) {
        distictMatchingSize++;
      }
    }

    if (distictMatchingSize === patternMap.size) {
      resultIndexes.push(start);
    }

    if (end >= pattern.length - 1) {
      const startChar = str[start];
      if (patternMap.has(startChar)) {
        if (patternMap.get(startChar) === 0) {
          distictMatchingSize--;
        }
        patternMap.set(startChar, patternMap.get(startChar)! + 1);
      }
      start++;
    }
    end++;
  }

  return resultIndexes;
};
