export function coinChangeTopDown(coins: number[], amount: number): number {
  const result = new Array(amount + 1).fill(Infinity);
  result[0] = 0;

  for (let a = 1; a <= amount; a++) {
    for (let coin of coins) {
      const remainingAmount = a - coin;
      if (remainingAmount >= 0) {
        result[a] = Math.min(result[a], result[remainingAmount] + 1);
      }
    }
  }

  return result[amount] == Infinity ? -1 : result[amount];
}

export function coinChange(coins: number[], amount: number): number {
  return change(coins, amount);
}

function change(coins: number[], amount: number, startIdx = 0): number {
  if (amount < 0) {
    return -1;
  }

  if (amount === 0) {
    return 0;
  }

  let numberWays = -1;

  for (let i = startIdx; i < coins.length; i++) {
    const remainingCoinChangeWays = change(coins, amount - coins[i], i);
    if (remainingCoinChangeWays != -1) {
      numberWays =
        numberWays == -1
          ? Math.max(numberWays, remainingCoinChangeWays + 1)
          : Math.min(remainingCoinChangeWays + 1, numberWays);
    }
  }

  return numberWays;
}
