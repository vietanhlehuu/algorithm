export function findPeakElement(nums: number[]): number {
  if (nums.length == 0) {
    return -1;
  }
  let start = 0,
    end = nums.length - 1;

  do {
    const middle = Math.floor((end + start) / 2);
    const current = nums[middle];
    const left = nums[middle - 1] ?? -Infinity;
    const right = nums[middle + 1] ?? -Infinity;

    if (current > left && current > right) {
      return middle;
    }
    if (current < right) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  } while (start < end);

  return start;
}
