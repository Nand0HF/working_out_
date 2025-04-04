//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
  const lowerCaseSentence = sentence.toLowerCase();

  for (let char of lowerCaseSentence) {
    alphabet.delete(char);
    if (alphabet.size === 0) {
      return true; 
    }
  }
  return false; 
};
