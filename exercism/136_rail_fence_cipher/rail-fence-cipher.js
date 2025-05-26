//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (message, lines) => {
  if (lines <= 1 || message.length === 0) {
    return message;
  }

  const rails = Array(lines).fill('');
  let railIndex = 0;
  let direction = 1; // 1 for down, -1 for up

  for (const char of message) {
    rails[railIndex] += char;
    railIndex += direction;

    if (railIndex === lines - 1) {
      direction = -1;
    } else if (railIndex === 0) {
      direction = 1;
    }
  }

  return rails.join('');
};

export const decode = (message, lines) => {
  if (lines <= 1 || message.length === 0) {
    return message;
  }

  const railLengths = Array(lines).fill(0);
  let railIndex = 0;
  let direction = 1;

  for (let i = 0; i < message.length; i++) {
    railLengths[railIndex]++;
    railIndex += direction;

    if (railIndex === lines - 1) {
      direction = -1;
    } else if (railIndex === 0) {
      direction = 1;
    }
  }

  const rails = Array(lines).fill('');
  let messageIndex = 0;
  for (let i = 0; i < lines; i++) {
    rails[i] = message.slice(messageIndex, messageIndex + railLengths[i]);
    messageIndex += railLengths[i];
  }

  const result = Array(message.length).fill('');
  railIndex = 0;
  direction = 1;
  const railCursors = Array(lines).fill(0);

  for (let i = 0; i < message.length; i++) {
    result[i] = rails[railIndex][railCursors[railIndex]];
    railCursors[railIndex]++;
    railIndex += direction;

    if (railIndex === lines - 1) {
      direction = -1;
    } else if (railIndex === 0) {
      direction = 1;
    }
  }

  return result.join('');
};