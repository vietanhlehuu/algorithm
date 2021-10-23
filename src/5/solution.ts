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

export function changePossibilitiesBottomUp(
  amount: number,
  denominations: number[]
): number {
  let numberOfWaysForCentN: { [k: number]: number } = {};
  for (let centN = 0; centN <= amount; centN++) {
    numberOfWaysForCentN[centN] = 0;
    if (centN === 0) {
      numberOfWaysForCentN[centN] = 1;
    } else {
      for (let index = 0; index < denominations.length; index++) {
        const deno = denominations[index];
        const change = centN - deno;
        if (change >= 0) {
          numberOfWaysForCentN[centN] += numberOfWaysForCentN[change];
        }
      }
    }
  }
  return numberOfWaysForCentN[amount];
}
