//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (input, span) => {
  if (span < 0) {
    throw new Error('span must not be negative');
  }

  if (span < 1) {
    throw new Error('span must be greater than zero');
  }

  if (span > input.length) {
    throw new Error('span must be smaller than string length');
  }

  let first, last, output, product, i, input_length, update_pointers;

  output = 0;
  i = -1;
  input_length = input.length;
  update_pointers = () => {
    first = ++i;
    last = first + span - 1;
    product = 1;
  };
  update_pointers();

  while (last < input_length) {

    if (input[i] < '0' || input[i] > '9') {
      throw new Error('digits input must only contain digits');
    }

    if (input[i] === '0') {
      update_pointers();
    }

    else if (i <= last) {
      product *= +input[i];
      if (i++ === last && output < product) {
        output = product;
      }
    }
    else {
      product /= +input[first++];
      last++;
    }
  }
  return output;
};