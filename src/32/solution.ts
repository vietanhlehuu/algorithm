function nextCharPosition(s: string, i: number): number {
  let remainingDeletedChar = 0;
  while (s[i] == "#" || remainingDeletedChar > 0) {
    if (s[i] == "#") {
      remainingDeletedChar += 2;
    }
    i--;
    remainingDeletedChar--;
  }
  return i;
}
export function backspaceCompare(s: string, t: string): boolean {
  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    i = nextCharPosition(s, i);
    j = nextCharPosition(t, j);

    if (s[i] != t[j]) {
      return false;
    }

    i--;
    j--;
  }
  return true;
}
