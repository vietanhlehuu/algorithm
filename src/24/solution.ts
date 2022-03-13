// time: O(nums.length)
// space: O(1)
export function sortColors(nums: number[]): void {
  const colors = [0, 0, 0]; // 0, 1, 2
  nums.forEach((num) => {
    colors[num]++;
  });

  let k = 0;
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colors[i]; j++) {
      nums[k] = i;
      k++;
    }
  }
}

// Two pointers solution
export function sortColors2(nums: number[]): void {
  let left = 0,
    right = nums.length - 1;
  let i = 0;

  // stop when all after numbers are 2
  while (i <= right) {
    if (nums[i] == 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
      i++;
    } else if (nums[i] == 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
      // now, nums[i] can be 0 or 1 or 2, so, we keep i to continue checking
    } else {
      i++;
    }
  }
}
