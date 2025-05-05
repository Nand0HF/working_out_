//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
 
  const binNumArray = num.toString(2).padStart(5, '0').split("").reverse().map(Number);
  const secretActions = ["wink" , "double blink" , "close your eyes" , "jump"].filter((_, index) => binNumArray[index]);
  return binNumArray.at(-1) ? secretActions.reverse() : secretActions;
};
