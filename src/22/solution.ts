export const findSubstring = function (str: string, pattern: string): string {
  let start = 0,
    end = 0;

  let resultStart = -Infinity,
    resultEnd = -1;

  // default minlength will be -1 - Infinity = Infinity

  const patternMap = new Map<string, number>();
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (!patternMap.has(char)) {
      patternMap.set(char, 0);
    }
    patternMap.set(char, patternMap.get(char)! + 1);
  }

  let matchingSize = 0;

  while (end < str.length) {
    const char = str[end];
    if (patternMap.has(char)) {
      patternMap.set(char, patternMap.get(char)! - 1);
      if (patternMap.get(char)! >= 0) {
        matchingSize++;
      }
    }

    while (matchingSize === pattern.length) {
      if (end - start < resultEnd - resultStart) {
        resultStart = start;
        resultEnd = end;
      }

      const startChar = str[start];
      start++;

      if (patternMap.has(startChar)) {
        const startCharSizeInPatternMap = patternMap.get(startChar)!;
        patternMap.set(startChar, startCharSizeInPatternMap + 1);

        if (startCharSizeInPatternMap === 0) {
          matchingSize--;
          break;
        }
      }
    }
    end++;
  }

  // if resultStart == -Infinity => resultEnd == -1
  // in that case, it will return empty string
  return str.slice(resultStart, resultEnd + 1);
};
