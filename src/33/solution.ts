export function findUnsortedSubarray(nums: number[]): number {
  let low = 0;
  let high = nums.length - 1;

  // find the first element that is not in order
  while (low < nums.length) {
    if (nums[low] > nums[low + 1]) {
      break;
    }
    low++;
  }

  // already sorted
  if (low == nums.length) {
    return 0;
  }

  // find the last element that is not in order
  while (high >= 0) {
    if (nums[high] < nums[high - 1]) {
      break;
    }
    high--;
  }

  // find the maximum and minimum of the subarray
  let subarrayMax = -Infinity,
    subarrayMin = Infinity;
  for (let k = low; k < high + 1; k++) {
    subarrayMax = Math.max(subarrayMax, nums[k]);
    subarrayMin = Math.min(subarrayMin, nums[k]);
  }

  // extends the subarray to the left
  while (low > 0 && nums[low - 1] > subarrayMin) {
    low--;
  }

  // extends the subarray to the right
  while (high < nums.length - 1 && nums[high + 1] < subarrayMax) {
    high++;
  }

  return high - low + 1;
}
