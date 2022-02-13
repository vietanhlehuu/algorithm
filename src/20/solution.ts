// O(pattern.length)
// const checkPermutation = (
//   str: string,
//   pattern: Map<string, number>,
//   start: number,
//   end: number
// ): boolean => {
//   const newMap = new Map(pattern);
//   for (let i = start; i <= end; i++) {
//     if (!newMap.has(str[i]) || newMap.get(str[i]) === 0) {
//       return false;
//     }
//     newMap.set(str[i], newMap.get(str[i])! - 1);
//   }

//   return true;
// };

// export const findPermutation = function (
//   str: string,
//   pattern: string
// ): boolean {
//   let start = 0,
//     end = pattern.length - 1;

//   const map = new Map<string, number>();

//   // O(pattern.length)
//   for (let i = 0; i < pattern.length; i++) {
//     const curChar = pattern[i];
//     if (!map.has(curChar)) {
//       map.set(curChar, 0);
//     }
//     map.set(curChar, map.get(curChar)! + 1);
//   }

//   // O(str.length x pattern.length)
//   while (end < str.length) {
//     if (checkPermutation(str, map, start, end)) {
//       return true;
//     }
//     start++;
//     end++;
//   }

//   return false;
// };

export const findPermutation = function (
  str: string,
  pattern: string
): boolean {
  let start = 0,
    end = 0;

  const patternMap = new Map<string, number>();

  // O(pattern.length)
  for (let i = 0; i < pattern.length; i++) {
    const curChar = pattern[i];
    if (!patternMap.has(curChar)) {
      patternMap.set(curChar, 0);
    }
    patternMap.set(curChar, patternMap.get(curChar)! + 1);
  }

  let distinctMatchingSize = 0;

  // O(str.length)
  while (end < str.length) {
    const curChar = str[end];

    if (patternMap.has(curChar)) {
      patternMap.set(curChar, patternMap.get(curChar)! - 1);
      if (patternMap.get(curChar)! === 0) {
        distinctMatchingSize++;
      }
    }

    if (distinctMatchingSize === patternMap.size) {
      return true;
    }

    if (end >= pattern.length - 1) {
      const startChar = str[start];
      if (patternMap.has(startChar)) {
        if (patternMap.get(startChar)! == 0) {
          distinctMatchingSize--;
        }
        patternMap.set(startChar, patternMap.get(startChar)! + 1);
      }
      start++;
    }
    end++;
  }

  return false;
};
