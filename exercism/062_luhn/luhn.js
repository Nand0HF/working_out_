//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (num) => {
  const cleanedNum = num.replace(/\s/g, '');
  if (cleanedNum.length <= 1) return false;
  const reversedNum = cleanedNum.split('').reverse();
  
  const processedDigits = reversedNum.map((digit, index) => {
    let numDigit = parseInt(digit, 10);
    if (index % 2 !== 0) { 
      numDigit *= 2;
      if (numDigit > 9) numDigit -= 9;
    }
    return numDigit;
  });

  const sum = processedDigits.reduce((acc, curr) => acc + curr, 0);
  return sum % 10 === 0;
};
