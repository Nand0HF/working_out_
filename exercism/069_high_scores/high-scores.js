//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(listOfScores) {
    this._scores = listOfScores;
    this.sortedScores = [...this._scores].sort((a, b) => b - a);
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores[this._scores.length - 1]; 
  }

  get personalBest() {
    return this.sortedScores[0];
  }

  get personalTopThree() {
    if (this._scores.length <= 3) {
      return this.sortedScores;
    }
    return this.sortedScores.slice(0, 3);
  }
}
