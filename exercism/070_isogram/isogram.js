//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (string) => {
  const normalizedString = string.toLowerCase().replace(/[\s-]/g, '');
  const stringSet = new Set(normalizedString);
  return normalizedString.length === stringSet.size;
};