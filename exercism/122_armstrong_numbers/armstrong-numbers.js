//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {
  const numStr = String(number);
  const numDigits = numStr.length;

  let sum = typeof number === 'bigint' ? 0n : 0;

  for (let i = 0; i < numDigits; i++) {
    const digit = typeof number === 'bigint' ? BigInt(numStr[i]) : Number(numStr[i]);
    const digitPower = typeof number === 'bigint'
      ? digit ** BigInt(numDigits) 
      : digit ** numDigits;        

    sum = sum + digitPower;
  }

  return number === sum;
};