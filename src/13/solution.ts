// O(1) space & O(n) time

export function moveZerosToLeft(arr: number[]) {
  let numberOfZeroes = 0;
  for (const value of arr) {
    if (value == 0) {
      numberOfZeroes++;
    }
  }

  let i = arr.length - 1;
  let j = i;
  while (i >= numberOfZeroes) {
    if (arr[i] == 0) {
      if (j > i) {
        j = i - 1;
      }
      // find the value is different than 0 and swap
      while (arr[j] == 0) {
        j--;
      }
      arr[i] = arr[j];
      arr[j] = 0;
      j--;
    }
    i--;
  }
}
