//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...input) => {
  if (!input || input.length === 0) return '';

  let output = '';
  let proverbItems = [...input]; 
  let finalQualifier = null;
  const lastItem = input.at(-1); 
  
  if (typeof lastItem === 'object') {
    finalQualifier = lastItem.qualifier;
    proverbItems = input.slice(0, -1);
  }

  for (let i = 0; i < proverbItems.length - 1; i++) {
    output += `For want of a ${proverbItems[i]} the ${proverbItems[i + 1]} was lost.\n`;
  }

  output += `And all for the want of a ${finalQualifier !== null ? finalQualifier + ' ' : ''}${proverbItems[0]}.`
                                    
  return output;
};
