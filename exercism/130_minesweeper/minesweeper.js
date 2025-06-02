//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  if (input.length === 0) return [];

  if (input[0].length === 0) return [''];
  
  const rows = input.length;
  const cols = input[0].length;
  const mineCountMatrix = Array.from({ length: rows }, () => new Array(cols).fill(' '));
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (input[row][col] === '*') {
        mineCountMatrix[row][col] = '*';
      } else {
        let mineNeighboursCount = 0;
        for (let [di, dj] of directions) {
          let nRow = di + row;
          let nCol = dj + col;

          if (nRow >= 0 && nRow < rows && nCol >= 0 && nCol < cols) {
            if (input[nRow][nCol] === '*') mineNeighboursCount++;
          }
        }
        if (mineNeighboursCount > 0) mineCountMatrix[row][col] = String(mineNeighboursCount);
      }
    }
  }
  return mineCountMatrix.map(row => row.join(''));
};
