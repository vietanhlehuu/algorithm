export function nonRepeatSubstring(str: string): number {
  let start = 0;
  let end = 0;
  let max = 1;

  let set = new Set<string>();

  while (end < str.length) {
    if (set.has(str[end])) {
      const length = end - start;
      for (let i = start; i < end; i++) {
        start++;
        if (str[i] === str[end]) {
          break;
        }
        set.delete(str[i]);
      }
    } else {
      set.add(str[end]);
    }
    end++;
    max = Math.max(max, end - start);
  }

  return max;
}
