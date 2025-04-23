//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, listOfWords) => {
  const targetLower = word.toLowerCase();
  const sortedTarget = targetLower.split('').sort().join('');
  const anagrams = [];

  for (const candidate of listOfWords) {
    const candidateLower = candidate.toLowerCase();
    if (candidateLower === targetLower) {
      continue;
    }
    const sortedCandidate = candidateLower.split('').sort().join('');
    if (sortedTarget === sortedCandidate) {
      anagrams.push(candidate);
    }
  }

  return anagrams;
};