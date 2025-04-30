//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (characters) => {
  let counter = 1;
  let output = '';
  for (let index = 0; index <= characters.length - 1; index++) {
    if (characters[index] !== characters[index + 1]) {
      counter === 1 ? output += characters[index] : output += `${counter}${characters[index]}`;
      counter = 1;
    } else {
      counter++ ;  
    }
  }
  return output;
};

export const decode = (characters) => {
  let output = '';
  let numberBuffer = '';

  for (let i = 0; i < characters.length; i++) {
    const char = characters[i];
    if (/\d/.test(char)) {
      numberBuffer += char;
    } else {
      const repeatCount = numberBuffer === '' ? 1 : parseInt(numberBuffer, 10);
      output += char.repeat(repeatCount);
      numberBuffer = '';
    }
  }
  return output;
};