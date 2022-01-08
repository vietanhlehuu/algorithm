const findSumOfTwo = (arr: number[], sum: number, startIdx = 0): boolean => {
  const traversedElements = new Set<number>([]);

  for (let i = startIdx; i < arr.length; i++) {
    if (traversedElements.has(sum - arr[i])) {
      return true;
    }
    traversedElements.add(arr[i]);
  }
  return false;
};

// time: O(n2)
// space O(n)
export const findSumOfThree = (arr: number[], sum: number): boolean => {
  for (let i = 0; i < arr.length; i++) {
    const curNum = arr[i];
    if (findSumOfTwo(arr, sum - curNum, i + 1)) {
      return true;
    }
  }
  return false;
};

// More optimal solution: O(n2) time complexity and O(1) space complexity [Heap sort]
// Firstly, sort the array, it will cost O(nlogn) time complexity & O(1) space
// Then, in the function findSumOfTwo, we can traverse the array from both direction
// sum = arr[i] + arr[j] (i, j are the indices of two ends)
// if the sum is not equal to the expected sum
// then: i++ if the sum is less than the expected sum
//       j-- if the sum is more than the expected sum
