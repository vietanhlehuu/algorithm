export function removeElement(nums: number[], val: number): number {
  let notEqualValueIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      if (notEqualValueIdx != i) {
        // this reduce assign cost for same position
        nums[notEqualValueIdx] = nums[i];
      }
      notEqualValueIdx++;
    }
  }

  return notEqualValueIdx;
}
