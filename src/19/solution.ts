// This question is similar to the previous one

export const lengthOfLongestOne = function (arr: (0 | 1)[], k: number): number {
  let start = 0,
    end = 0,
    max = 0,
    maxRepeat = 0;

  while (end < arr.length) {
    const cur = arr[end];

    if (cur === 1) {
      maxRepeat++;
    }

    if (end - start + 1 - maxRepeat > k) {
      if (arr[start] == 1) {
        maxRepeat--;
      }
      start++;
    }

    max = Math.max(max, end - start + 1);
    end++;
  }

  return max;
};
