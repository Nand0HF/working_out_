//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (lettersMap) => {
  const newLettersMap = {};
  for (const score in lettersMap) {
    const letters = lettersMap[score];
    letters.forEach((letter) => {
      newLettersMap[letter.toLowerCase()] = parseInt(score, 10);
    });
  }
  return newLettersMap;
};