export function sortedSquares(nums: number[]): number[] {
  const result = new Array(nums.length);
  let start = 0,
    end = nums.length - 1;

  let i = nums.length - 1;
  while (i >= 0) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      result[i] = nums[start] ** 2;
      start++;
    } else {
      result[i] = nums[end] ** 2;
      end--;
    }
    i--;
  }

  return result;
}
