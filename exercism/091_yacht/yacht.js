//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (dices, category) => {
  let score = 0;

  const diceMap = {};
  dices.forEach((dice) => (diceMap[dice] = (diceMap[dice] || 0) + 1));

  switch (category) {
    case 'ones':
      score = (diceMap['1'] || 0) * 1;
      break;
    case 'twos':
      score = (diceMap['2'] || 0) * 2;
      break;
    case 'threes':
      score = (diceMap['3'] || 0) * 3;
      break;
    case 'fours':
      score = (diceMap['4'] || 0) * 4;
      break;
    case 'fives':
      score = (diceMap['5'] || 0) * 5;
      break;
    case 'sixes':
      score = (diceMap['6'] || 0) * 6;
      break;
    case 'full house': 
      const counts = Object.values(diceMap);
      let hasTwoOfKind = false;
      let hasThreeOfKind = false;

      if (counts.length === 2) {
        for (const count of counts) {
          if (count === 2) hasTwoOfKind = true;
          if (count === 3) hasThreeOfKind = true;
        }
      }

      hasTwoOfKind && hasThreeOfKind ? score = dices.reduce((sum, die) => sum + die, 0) : score = 0;
      break;
    case 'four of a kind': 
      let foundFourOfKind = false;
      let sumOfFourDice = 0;
      for (const dieFace in diceMap) {
        if (diceMap[dieFace] >= 4) {
          foundFourOfKind = true;
          sumOfFourDice = parseInt(dieFace) * 4;
          break; 
        }
      }
      foundFourOfKind ? score = sumOfFourDice : score = 0;
      break;
    case 'little straight': 
      const uniqueDiceFaces = Object.keys(diceMap).map(Number).sort((a, b) => a - b);
      (uniqueDiceFaces.length === 5 &&
          uniqueDiceFaces[0] === 1 &&
          uniqueDiceFaces[1] === 2 &&
          uniqueDiceFaces[2] === 3 &&
          uniqueDiceFaces[3] === 4 &&
          uniqueDiceFaces[4] === 5) ? score = 30 
                                    : score = 0;
      break;
    case 'big straight': 
      const uniqueDiceFacesBig = Object.keys(diceMap).map(Number).sort((a, b) => a - b);
      (uniqueDiceFacesBig.length === 5 &&
          uniqueDiceFacesBig[0] === 2 &&
          uniqueDiceFacesBig[1] === 3 &&
          uniqueDiceFacesBig[2] === 4 &&
          uniqueDiceFacesBig[3] === 5 &&
          uniqueDiceFacesBig[4] === 6) ? score = 30 
                                       : score = 0;
      break;
    case 'choice':
      score = dices.reduce((sum, die) => sum + die, 0);
      break;
    case 'yacht':
      Object.keys(diceMap).length === 1 ? score = 50 : score = 0;
      break;
  }

  return score;
};
