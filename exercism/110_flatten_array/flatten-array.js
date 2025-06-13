//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (inputArray) => {
  const flattenedResult = [];

  const unpack = (currentElement) => {
    if (Array.isArray(currentElement)) {
      for (const item of currentElement) unpack(item); 
    } else {
      if (currentElement !== null && currentElement !== undefined) flattenedResult.push(currentElement);
    }
  }
  
  unpack(inputArray);
  return flattenedResult;
};