//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (string) => {
  const words = string.replace(/[^\w\s-]|_/g, '').split(/[\s-]+/);
  let acronym = '';

  for (const word of words) {
    if (word.length > 0) {
      acronym += word[0].toUpperCase();
    }
  }

  return acronym;
};