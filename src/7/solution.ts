// This question is similar to the question 5
// we need to find all combinations from 1 to target - 1
// Each number in the combination can repeat many times

/**
  using startNumber to reduce duplication result,
  not check the smaller number (in the loop),
  since those smaller number already checked the bigger number for the result
 */
function findAllSumIncludeTarget(
  target: number,
  startNumber = 1,
  includeTarget = true
) {
  if (target < 0) {
    return [];
  }

  if (target == 0) {
    return [[]];
  }

  if (target < startNumber) {
    return [];
  }

  let result: number[][] = [];

  for (let i = startNumber; (i == target && includeTarget) || i < target; i++) {
    let currentSum = findAllSumIncludeTarget(target - i, i);
    currentSum = currentSum.map((item) => [i, ...item]);
    result = [...result, ...currentSum];
  }

  return result;
}

export function findAllSum(target: number): number[][] {
  return findAllSumIncludeTarget(target, 1, false);
}
// PS: This solution is cumbersome a bit, hope to find a smarter solution
