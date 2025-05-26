//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function chain(dominoes) {
  if (dominoes.length === 0) {
    return [];
  }

  function findChain(currentChain, usedDominoesIndices) {
    if (currentChain.length === dominoes.length) {
      if (currentChain[0][0] === currentChain[currentChain.length - 1][1]) {
        return currentChain;
      }
      return null;
    }

   
    for (let i = 0; i < dominoes.length; i++) {
      if (usedDominoesIndices.has(i)) {
        continue; 
      }

      const lastEndOfChain = currentChain[currentChain.length - 1][1];
      const [d1, d2] = dominoes[i];

    
      if (d1 === lastEndOfChain) {
        usedDominoesIndices.add(i);
        const result = findChain([...currentChain, [d1, d2]], usedDominoesIndices);
        if (result) {
          return result;
        }
        usedDominoesIndices.delete(i); 
      } else if (d2 === lastEndOfChain) { 
        usedDominoesIndices.add(i);
        const result = findChain([...currentChain, [d2, d1]], usedDominoesIndices);
        if (result) {
          return result;
        }
        usedDominoesIndices.delete(i); 
      }
    }
    return null; 
  }

  for (let i = 0; i < dominoes.length; i++) {
    const [d1, d2] = dominoes[i];

    let result = findChain([dominoes[i]], new Set([i]));
    if (result) {
      return result;
    }

    if (d1 !== d2) {
      result = findChain([[d2, d1]], new Set([i]));
      if (result) {
        return result;
      }
    }
  }

  return null; 
}
