export function longestSubstringWithKDistinct(str: string, k: number) {
  let start = 0;
  let end = 0;
  let max = 1;
  let numberDistinctChar = 0;
  const map = new Map<string, number>();

  while (end < str.length) {
    let numberOfCurChar = map.get(str[end]);
    if (numberOfCurChar) {
      map.set(str[end], numberOfCurChar + 1);
    } else {
      if (numberDistinctChar == k) {
        for (let i = start; i < end; i++) {
          start++;
          map.set(str[i], (map.get(str[i]) as number) - 1);
          if (map.get(str[i]) == 0) {
            numberDistinctChar--;
          }
          if (numberDistinctChar < k) {
            break;
          }
        }
      }
      numberDistinctChar++;
      map.set(str[end], 1);
    }
    end++;
    max = Math.max(max, end - start);
  }
  return max;
}
