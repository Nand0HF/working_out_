//
// This is only a SKELETON file for the 'Word Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class WordSearch {
  static #DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];

  constructor(grid) {
    this.grid = grid; 
    this.rows = grid.length;
    this.cols = grid[0] ? grid[0].length : 0;
  }

  find(wordArray) {
    const wordIndexes = {};
    for (const word of wordArray) {
      wordIndexes[word] = this.#findWordInGrid(word);
    }
    return wordIndexes;
  }

  #findWordInGrid(word) {
    if (!word || word.length === 0) {
      return undefined;
    }

    const firstChar = word[0];

    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (this.grid[row][col] === firstChar) {
          for (const [dr, dc] of WordSearch.#DIRECTIONS) {
            const foundLocation = this.#checkDirection(word, row, col, dr, dc);
            if (foundLocation) {
              return foundLocation;
            }
          }
        }
      }
    }
    return undefined;
  }

  #checkDirection(word, startRow, startCol, dr, dc) {
    let currentRow = startRow;
    let currentCol = startCol;

    for (let i = 0; i < word.length; i++) {
      if (
        currentRow < 0 ||
        currentRow >= this.rows ||
        currentCol < 0 ||
        currentCol >= this.cols
      ) {
        return null;
      }

      if (this.grid[currentRow][currentCol] !== word[i]) {
        return null;
      }

      currentRow += dr;
      currentCol += dc;
    }

    return {
      start: [startRow + 1, startCol + 1],
      end: [currentRow - dr + 1, currentCol - dc + 1],
    };
  }
}

export default WordSearch;
