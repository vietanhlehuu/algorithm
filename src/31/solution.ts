export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) {
    return 0;
  }

  let start = 0;
  let end = 0;
  let product = 1;
  let result = 0;

  while (end < nums.length) {
    const curNum = nums[end];
    product *= curNum;

    while (product >= k) {
      product /= nums[start];
      start++;
    }
    result += end - start + 1;
    end++;
  }

  return result;
}
