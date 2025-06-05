//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (phrase) => {
  return phrase.split(' ').map(word => translateWord(word)).join(' ');
};

const translateWord = (word) => {
  if (word.match(/^(a|e|i|o|u|xr|yt)/)) {
    return word + 'ay';
  }

  let splitIndex = 0;

  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];
    const prevChar = word[i - 1];

    if (['a', 'e', 'i', 'o', 'u'].includes(currentChar)) {
      if (currentChar === 'u' && prevChar === 'q') {
        continue;
      }
      splitIndex = i;
      break;
    }

    if (currentChar === 'y' && i > 0 && !['a', 'e', 'i', 'o', 'u'].includes(prevChar)) {
      splitIndex = i;
      break;
    }
  }
  return word.slice(splitIndex) + word.slice(0, splitIndex) + 'ay';
};