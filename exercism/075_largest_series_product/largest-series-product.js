//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {
  if (span < 0) {
    throw new Error('span must not be negative');
  }

  if (span < 1) {
    throw new Error('span must be greater than 0');
  }

  if (span > input.length) {
    throw new Error('span must be smaller than string length');
  }

  if (!/^[0-9]+$/.test(input)) {
    throw new Error('digits input must only contain digits');
  }

  let largestProduct = 0;

  for (let i = 0; i <= input.length - span; i++) {
    let product = 1;
    for (let j = i; j < i + span; j++) {
      product *= parseInt(input[j], 10);
    }
    if (product > largestProduct) {
      largestProduct = product;
    }
  }

  return largestProduct;
};