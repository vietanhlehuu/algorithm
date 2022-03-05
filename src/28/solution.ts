export function threeSum(nums: number[]): number[][] {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < sortedNums.length; i++) {
    if (i > 0 && sortedNums[i] == sortedNums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = sortedNums.length - 1;
    while (j < k) {
      const sum = sortedNums[j] + sortedNums[k];
      if (sum == -sortedNums[i]) {
        result.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
        j++;
        k--;
        while (sortedNums[j] == sortedNums[j - 1]) {
          j++;
        }
        while (sortedNums[k] == sortedNums[k + 1]) {
          k--;
        }
      } else if (sum < -sortedNums[i]) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
}
