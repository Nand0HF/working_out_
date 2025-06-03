//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (phrase) => {
  const words = phrase.split(" ");
  const translatedWords = [];

  for (let word of words) {
    const originalWord = word;
    let translatedWord = "";

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const isVowel = (char) => vowels.includes(char);

    if (isVowel(originalWord[0]) || originalWord.startsWith("xr") || originalWord.startsWith("yt")) {
      translatedWord = originalWord + "ay";
    }
    else if (originalWord.includes("qu")) {
      const quIndex = originalWord.indexOf("qu");
      const precedingConsonants = originalWord.substring(0, quIndex);
      const remainder = originalWord.substring(quIndex + 2);
      translatedWord = remainder + precedingConsonants + "quay";
    }
    else if (originalWord.includes("y") && !isVowel(originalWord[0])) {
      let firstVowelOrYIndex = -1;
      for (let i = 0; i < originalWord.length; i++) {
        if (isVowel(originalWord[i]) || (originalWord[i] === 'y' && i > 0)) {
          firstVowelOrYIndex = i;
          break;
        }
      }

      if (firstVowelOrYIndex !== -1) {
        const leadingConsonants = originalWord.substring(0, firstVowelOrYIndex);
        translatedWord = originalWord.substring(firstVowelOrYIndex) + leadingConsonants + "ay";
      } else {
        let firstConsonantBlockEnd = 0;
        while (firstConsonantBlockEnd < originalWord.length && !isVowel(originalWord[firstConsonantBlockEnd]) && originalWord[firstConsonantBlockEnd] !== 'y') {
          firstConsonantBlockEnd++;
        }
        if (firstConsonantBlockEnd === originalWord.length) { 
            translatedWord = originalWord + "ay";
        } else {
            const leadingConsonants = originalWord.substring(0, firstConsonantBlockEnd);
            translatedWord = originalWord.substring(firstConsonantBlockEnd) + leadingConsonants + "ay";
        }
      }
    }
    else {
      let firstVowelIndex = -1;
      for (let i = 0; i < originalWord.length; i++) {
        if (isVowel(originalWord[i])) {
          firstVowelIndex = i;
          break;
        }
      }

      if (firstVowelIndex === -1) {
        translatedWord = originalWord + "ay";
      } else {
        const leadingConsonants = originalWord.substring(0, firstVowelIndex);
        translatedWord = originalWord.substring(firstVowelIndex) + leadingConsonants + "ay";
      }
    }
    translatedWords.push(translatedWord);
  }

  return translatedWords.join(" ");
};