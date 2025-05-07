//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (subtitle) => {
  const lowerCaseSubtitle = subtitle.toLowerCase();
  const words = lowerCaseSubtitle.match(/\w+('\w+)?/g);
  const wordCounts = {};

  if (words) {
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    }
  }

  return wordCounts;
};