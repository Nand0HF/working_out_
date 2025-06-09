//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const getScore = {
  'ones': d => d.filter(dice => dice === 1).length,
  'twos': d => d.filter(dice => dice === 2).length * 2,
  'threes': d => d.filter(dice => dice === 3).length * 3,
  'fours': d => d.filter(dice => dice === 4).length * 4,
  'fives': d => d.filter(dice => dice === 5).length * 5,
  'sixes': d => d.filter(dice => dice === 6).length * 6,
  'full house': d => {
    const counts = {};
    d.forEach(dice => counts[dice] = (counts[dice] || 0) + 1);
    const values = Object.values(counts);
    return values.length === 2 && (values.includes(3) && values.includes(2)) ?  getScore['choice'](d) : 0;
  },
  'four of a kind': d => d[0] === d[3] || d[1] === d[4] ? d[1] * 4 : 0,
  'little straight': d => d[0] === 1 && d.every((dice, index, d) => (index === 0 || (dice === d[index - 1] + 1))) ? 30 : 0,
  'big straight': d => d[0] === 2 && d.every((dice, index, d) => (index === 0 || (dice === d[index - 1] + 1))) ? 30 : 0,
  'choice': d => d.reduce((sum, dice) => sum + dice, 0),
  'yacht': d => d[0] === d[4] ? 50 : 0
}

export const score = (dices, category) => {
  return getScore[category](dices.sort());
};

