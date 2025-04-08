//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const trimmed = message.trim();

  const isSilence = trimmed === '';
  const isQuestion = trimmed.endsWith('?');
  const isShouting = trimmed.toUpperCase() === trimmed && /[A-Z]/.test(trimmed);

  switch (true) {
    case isSilence:
      return "Fine. Be that way!";
    case isShouting && isQuestion:
      return "Calm down, I know what I'm doing!";
    case isShouting:
      return "Whoa, chill out!";
    case isQuestion:
      return "Sure.";
    default:
      return "Whatever.";
  }
};
