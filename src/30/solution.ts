export function threeSumSmaller(nums: number[], target: number): number {
  const sorted = [...nums].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < sorted.length - 2; i++) {
    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];

      if (sum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }

  return count;
}
