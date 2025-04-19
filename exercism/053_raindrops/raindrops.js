//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let sounds = '';
  
  if (num % 3 === 0) {sounds += 'Pling'}
  if (num % 5 === 0) {sounds += 'Plang'}
  if (num % 7 === 0) {sounds += 'Plong'}
  
  return sounds || num.toString();
};
