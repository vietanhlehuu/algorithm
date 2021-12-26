// using recursive approach
export function changePossibilities(
  amount: number,
  denominations: number[],
  currentIdx = 0
): number {
  if (!denominations.length || amount < 0) {
    return 0;
  }

  if (amount === 0) {
    return 1;
  }

  if (currentIdx === denominations.length) {
    return 0;
  }

  let numberOfWays = 0;
  let amoutLeft = amount;
  const currentDenomination = denominations[currentIdx];

  while (amoutLeft >= 0) {
    numberOfWays += changePossibilities(
      amoutLeft,
      denominations,
      currentIdx + 1
    );
    amoutLeft -= currentDenomination;
  }
  return numberOfWays;
}

// using loop
export function changePossibilitiesBottomUp(
  amount: number,
  denominations: number[]
): number {
  let numberOfWaysForCentN = new Array(amount + 1).fill(0);
  numberOfWaysForCentN[0] = 1;

  for (const coin of denominations) {
    for (let cent = coin; cent <= amount; cent++) {
      const remainder = cent - coin;
      numberOfWaysForCentN[cent] += numberOfWaysForCentN[remainder];
    }
  }
  //
  return numberOfWaysForCentN[amount];
}
