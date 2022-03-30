export function intervalIntersection(
  firstList: number[][],
  secondList: number[][]
): number[][] {
  const result: number[][] = [];
  let i = 0,
    j = 0;

  while (i < firstList.length && j < secondList.length) {
    const [firstIntervalStart, firstIntervalEnd] = firstList[i];
    const [secondIntervalStart, secondIntervalEnd] = secondList[j];

    const start = Math.max(firstIntervalStart, secondIntervalStart);
    const end = Math.min(firstIntervalEnd, secondIntervalEnd);
    if (start <= end) {
      result.push([start, end]);
    }

    if (firstIntervalEnd < secondIntervalEnd) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}
