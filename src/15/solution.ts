export function smallestSubArraySum(s: number, arr: number[]) {
  if (arr.length == 0) {
    return 0;
  }

  let start = 0;
  let end = 0;
  let sum = 0;
  let min = Infinity;

  while (end < arr.length) {
    sum += arr[end];
    while (sum >= s) {
      if (end == start) {
        return 1;
      }
      min = Math.min(min, end - start + 1);
      sum -= arr[start];
      start++;
    }
    end++;
  }

  return min == Infinity ? 0 : min;
}
