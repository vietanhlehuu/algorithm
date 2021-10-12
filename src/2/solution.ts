export const getProductsOfAllIntsExceptAtIndex = (arr: number[]): number[] => {
  if (arr.length == 0 || arr.length == 1) {
    throw new Error("Arr should have more elements");
  }
  let result: number[] = new Array(arr.length).fill(1);

  // calculate the first round (forward) with incremental product for each element
  let incrementalProduct = arr[0];
  for (let idx = 1; idx < arr.length; idx++) {
    result[idx] = incrementalProduct;
    incrementalProduct *= arr[idx];
  }
  // calculate the second round (backward) with incremental product for each element
  // we already have 1/2 the result
  incrementalProduct = arr[arr.length - 1];
  for (let idx = arr.length - 2; idx >= 0; idx--) {
    result[idx] *= incrementalProduct;
    incrementalProduct *= arr[idx];
  }
  return result;
};
