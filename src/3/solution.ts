// brute force: O(n3)
// sorting: O(nlogn)
// greedy: O(n)

export function highestProductOf3(arr: number[]): number {
  if (arr.length < 3) {
    throw new Error("The arr should have more elements");
  }
  let maxNum = Math.max(arr[0], arr[1]);
  let minNum = Math.min(arr[0], arr[1]);
  let highestProductOf2 = arr[0] * arr[1];
  let lowestProductOf2 = arr[0] * arr[1];
  let _highestProductOf3 = -Infinity;

  for (let idx = 2; idx < arr.length; idx++) {
    const curNum = arr[idx];

    _highestProductOf3 = Math.max(
      _highestProductOf3,
      highestProductOf2 * curNum,
      lowestProductOf2 * curNum
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      maxNum * curNum,
      minNum * curNum
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      maxNum * curNum,
      minNum * curNum
    );

    maxNum = Math.max(maxNum, curNum);

    minNum = Math.min(minNum, curNum);
  }
  return _highestProductOf3;
}
