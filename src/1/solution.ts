export const getMaxProfit = (stockPrices: number[]): number | Error => {
  if (stockPrices.length == 0 || stockPrices.length == 1) {
    throw new Error("Stock prices should have more value");
  }
  let minPrice = stockPrices[0];
  let maxValue = -Infinity;

  for (let i = 1; i < stockPrices.length; i++) {
    const price = stockPrices[i];
    if (price - minPrice > maxValue) {
      maxValue = price - minPrice;
    }
    if (price < minPrice) {
      minPrice = price;
    }
  }
  return maxValue;
};
