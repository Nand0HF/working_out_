//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (heightsGrid) => {
  
  const treeHouseSpots = [];
  if (heightsGrid.length === 0 || heightsGrid[0].length === 0) {
    return [];
  }
  
  for (let row = 0; row < heightsGrid.length; row++) {
    const rowValues = heightsGrid[row];
    const higherTree = Math.max(...rowValues);
    const possibleCols = [];
    for (let i = 0; i < rowValues.length; i++) {
      if (rowValues[i] === higherTree) {
        possibleCols.push(i);
        }
      }
    
  
    for (const col of possibleCols) {
          let isSaddlePoint = true;
          for (let i = 0; i < heightsGrid.length; i++) {
            if (heightsGrid[i][col] < higherTree) {
              isSaddlePoint = false;
              break;
            }
          }
          if (isSaddlePoint) {
            treeHouseSpots.push({ row: row + 1, column: col + 1 });
          }
        }
    }

  return treeHouseSpots;
};
