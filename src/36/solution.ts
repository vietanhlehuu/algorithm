export function insert(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  if (intervals.length == 0) {
    return [newInterval];
  }

  const result = [];
  let i = 0;

  // add all intervals before new interval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // update the new interval with all collapsed intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }

  // add new interval
  result.push(newInterval);

  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}
