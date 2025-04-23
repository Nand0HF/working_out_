//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (num) => {
  if (num <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  let divisorsSum = 1; 

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisorsSum += i;
      if (i * i !== num) { 
        divisorsSum += num / i;
      }
    }
  }

  if (divisorsSum < num || num === 1) {
    return 'deficient';
  }
  return divisorsSum === num ? 'perfect' : 'abundant';
};
