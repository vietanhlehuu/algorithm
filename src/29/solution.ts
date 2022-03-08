export function threeSumClosest(nums: number[], target: number): number {
  if (nums.length < 3) {
    return 0;
  }
  const sorted = [...nums].sort((a, b) => a - b);
  let closestSum = sorted[0] + sorted[1] + sorted[2];

  for (let i = 0; i < sorted.length - 2; i++) {
    let j = i + 1;
    let k = sorted.length - 1;
    while (j < k) {
      const closestDistance = target - closestSum;
      const sum = sorted[i] + sorted[j] + sorted[k];
      const currentDistance = target - sum;

      if (currentDistance == 0) {
        return sum;
      }

      if (Math.abs(currentDistance) < Math.abs(closestDistance)) {
        closestSum = sum;
      }

      if (currentDistance > 0) {
        // sum must be bigger
        j++;
      } else {
        // sum must be smaller
        k--;
      }
    }
  }
  return closestSum;
}
