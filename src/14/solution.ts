export function maxSubArrayOfSizeK(arr: number[], k: number) {
  if (arr.length < k) {
    throw new Error("The arr should have more elements");
  }

  let maxSum = -Infinity;
  let i = 0;
  let sum = 0;
  while (i < arr.length) {
    sum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(sum, maxSum);
      sum -= arr[i - (k - 1)];
    }
    i++;
  }
  return maxSum;
}
