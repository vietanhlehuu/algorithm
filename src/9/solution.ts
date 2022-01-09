export function searchPosition(arr: number[], target: number): number {
  if (arr.length === 0) {
    return -1;
  }
  let start = 0;
  let end = arr.length - 1;

  if (target === arr[start]) {
    return start;
  }
  if (target === arr[end]) {
    return end;
  }

  let rotatedPoint: number;
  rotatedPoint = Math.floor((end + start) / 2);
  // if the arr is rotated,
  // the left side of the rotated point is always bigger than the right side

  // find the rotated point (the smallest number)
  while (rotatedPoint > start && rotatedPoint < end) {
    if (arr[rotatedPoint] < arr[rotatedPoint - 1]) {
      break;
    }

    if (arr[rotatedPoint] < arr[start]) {
      end = rotatedPoint;
    } else {
      start = rotatedPoint;
    }
    rotatedPoint = Math.floor((end + start) / 2);
  }

  // find the target
  let position = -1;
  start = 0;
  end = arr.length - 1;

  if (arr[rotatedPoint] == target) {
    return rotatedPoint;
  }

  if (target > arr[start]) {
    end = rotatedPoint;
  } else {
    start = rotatedPoint;
  }

  let mid = Math.floor((end + start) / 2);
  while (mid > start && mid < end) {
    if (arr[mid] == target) {
      position = mid;
    }

    if (target < arr[mid]) {
      end = mid;
    } else {
      start = mid;
    }

    mid = Math.floor((end + start) / 2);
  }
  return position;
}
