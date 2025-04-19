//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {
  let hammingDistance = 0;
  if (strand1.length === strand2.length) {
    for (let i = 0; i < strand1.length; i++) {
      if (strand1[i] !== strand2[i]) {
        hammingDistance++;
      }
    }
    return hammingDistance; 
  } else {
    throw Error('strands must be of equal length');
  }
};
