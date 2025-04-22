//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (phoneNumber) => {
  const cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');

  if (phoneNumber.match(/[a-zA-Z]/)) {
    throw new Error('Letters not permitted');
  }

  if (phoneNumber.match(/[^0-9a-zA-Z\s()+\-.]/)) {
    throw new Error('Punctuations not permitted');
  }

  const length = cleanedNumber.length;

  if (length < 10) {
    throw new Error('Incorrect number of digits');
  }

  if (length > 11) {
    throw new Error('More than 11 digits');
  }

  if (length === 11) {
    if (cleanedNumber[0] !== '1') {
      throw new Error('11 digits must start with 1');
    }
    const areaCode11 = cleanedNumber.slice(1, 4);
    const exchangeCode11 = cleanedNumber.slice(4, 7);
    if (areaCode11[0] === '0') {
      throw new Error('Area code cannot start with zero');
    }
    if (areaCode11[0] === '1') {
      throw new Error('Area code cannot start with one');
    }
    if (exchangeCode11[0] === '0') {
      throw new Error('Exchange code cannot start with zero');
    }
    if (exchangeCode11[0] === '1') {
      throw new Error('Exchange code cannot start with one');
    }
    return cleanedNumber.slice(1);
  }

  if (cleanedNumber[0] === '0') {
    throw new Error('Area code cannot start with zero');
  }
  if (cleanedNumber[0] === '1') {
    throw new Error('Area code cannot start with one');
  }

  if (cleanedNumber[3] === '0') {
    throw new Error('Exchange code cannot start with zero');
  }
  if (cleanedNumber[3] === '1') {
    throw new Error('Exchange code cannot start with one');
  }

  return cleanedNumber;
};