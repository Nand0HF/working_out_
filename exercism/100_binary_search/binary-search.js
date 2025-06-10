//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (array, num, low = 0, high = array.length - 1) => {
  if (low > high) throw new Error('Value not in array');

  const middleIndex = Math.floor((low + high) / 2);
  const middleElement = array[middleIndex];

  if (middleElement === num) return middleIndex;

  return middleElement > num ? find(array, num, low, middleIndex - 1) 
                             : find(array, num, middleIndex + 1, high);
};