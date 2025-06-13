//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (itemArray, level) => {
  let multiples = []; 
  let sumOfMultiples = 0;

  for (let item of itemArray) {
    if (item === 0) continue;
    
    for (let currentMultiple = item; currentMultiple < level; currentMultiple += item) {
      multiples.push(currentMultiple);
    }
  }

  const uniqueMultiples = new Set(multiples);

  for (let multiple of uniqueMultiples) {
    sumOfMultiples += multiple;
  }

  return sumOfMultiples;
};