//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x2, y2) => {
  const distanceToCenter = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

  if (distanceToCenter <= 1) {
    return 10;
  } else if (distanceToCenter <= 5) {
    return 5;
  } else if (distanceToCenter <= 10) {
    return 1;
  } 
  
  return 0;
};