//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rotate = (string, key) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const charCode = char.charCodeAt(0);

    if (charCode >= 65 && charCode <= 90) { 
      const shiftedCharCode = ((charCode - 65 + key) % 26) + 65;
      result += String.fromCharCode(shiftedCharCode);
    } else if (charCode >= 97 && charCode <= 122) { 
      const shiftedCharCode = ((charCode - 97 + key) % 26) + 97;
      result += String.fromCharCode(shiftedCharCode);
    } else { 
      result += char;
    }
  }
  return result;
};