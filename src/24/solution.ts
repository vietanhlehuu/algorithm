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
