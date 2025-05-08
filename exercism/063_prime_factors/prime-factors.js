//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  let remainder = num;
  let divisor = 2;
  const primeFactors = [];

  while (divisor * divisor <= remainder) {
    if (remainder % divisor === 0) {
      primeFactors.push(divisor);
      remainder /= divisor;
    } else {
      divisor++;
    }
  }

  if (remainder > 1) primeFactors.push(remainder);

  return primeFactors;
};
