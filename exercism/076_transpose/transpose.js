//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  const output = [];
  let current_length = input.at(-1)?.length;
  for (let index = input?.length - 2; index >= 0; index--) {
    if(input[index].length < current_length)
      input[index] = input[index].padEnd(current_length, ' ');
    else if(input[index].length > current_length)
      current_length = input[index].length;
  }
  for (let row = 0; row < input[0]?.length; row++) {
    output.push('');
    for (let col = 0; col < input.length; col++)
      output[row] += input[col][row] ?? '';
  }
  return output;
};