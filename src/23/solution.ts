// Time: O(s.length x words.length x words[0].length)
// Space: O(s.length + words.length)

export function findSubstring(s: string, words: string[]): number[] {
  if (words.length == 0) {
    return [];
  }
  // worst case, store all index -> O(s.length)
  const result: number[] = [];
  const wordLength = words[0].length;
  const wordsCount = words.length;
  const totalWordsLength = wordsCount * wordLength;

  // O(wordCount)
  const wordsMap = new Map<string, number>();

  // O(words.length)
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!wordsMap.has(word)) {
      wordsMap.set(word, 0);
    }
    wordsMap.set(word, wordsMap.get(word)! + 1);
  }

  // O(s.length)
  for (let i = 0; i < s.length - totalWordsLength + 1; i++) {
    const wordSeen = new Map<string, number>();
    // O (wordCount)
    for (let j = i; j < i + totalWordsLength; j += wordLength) {
      // O(wordLength)
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
