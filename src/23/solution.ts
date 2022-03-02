export function findSubstring(s: string, words: string[]): number[] {
  if (words.length == 0) {
    return [];
  }
  const result: number[] = [];
  const wordLength = words[0].length;
  const wordsCount = words.length;
  const totalWordsLength = wordsCount * wordLength;

  const wordsMap = new Map<string, number>();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!wordsMap.has(word)) {
      wordsMap.set(word, 0);
    }
    wordsMap.set(word, wordsMap.get(word)! + 1);
  }

  for (let i = 0; i < s.length - totalWordsLength + 1; i++) {
    const wordSeen = new Map<string, number>();

    for (let j = i; j < i + totalWordsLength; j += wordLength) {
      const word = s.slice(j, j + wordLength);

      if (wordsMap.has(word)) {
        wordSeen.set(word, (wordSeen.get(word) ?? 0) + 1);
        if (wordSeen.get(word)! > wordsMap.get(word)!) {
          break;
        }
        if (j + wordLength == i + totalWordsLength) {
          result.push(i);
        }
      } else {
        break;
      }
    }
  }

  return result;
}
