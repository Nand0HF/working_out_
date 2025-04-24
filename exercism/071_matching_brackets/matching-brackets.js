//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (string) => {
  const stack = [];
  const matchingPairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (const char of string) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.length === 0 || stack.pop() !== matchingPairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
