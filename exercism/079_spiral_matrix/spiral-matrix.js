//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  if (size <= 0) return [];
  
  const outputMatrix = Array(size).fill(0).map(() => Array(size).fill(0));
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; 

  let index = 1;
  let row = 0;
  let col = 0;
  let currentDirection = 0;

  while (index <= size * size) { 
    outputMatrix[row][col] = index;
    index++;

    let [dRow, dCol] = directions[currentDirection];
    let newRow = row + dRow;
    let newCol = col + dCol;

    if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size && outputMatrix[newRow][newCol] === 0) {
      row = newRow;
      col = newCol;
    } else {
      currentDirection = (currentDirection + 1) % 4; 
      [dRow, dCol] = directions[currentDirection]; 
      row += dRow;
      col += dCol;
    }
  }
  
  return outputMatrix;
};
