//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  constructor(matrix) {
    this.cells = matrix;
  }

  tick() {
    if (this.cells.length === 0 || this.cells[0].length === 0) {
      this.cells = []; 
      return;
    }

    const rows = this.cells.length;
    const cols = this.cells[0].length;
    const newCells = Array(rows).fill(0).map(() => Array(cols).fill(0)); 
    const neighborsOffsets = [
          [-1, -1], [-1, 0], [-1, 1],
          [0, -1],           [0, 1],
          [1, -1], [1, 0], [1, 1]
        ];

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let liveNeighbors = 0;

        for (const [di, dj] of neighborsOffsets) {
          const ni = i + di;
          const nj = j + dj;

          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
            if (this.cells[ni][nj] === 1) liveNeighbors++;
          }
        }

        const currentCell = this.cells[i][j];

        newCells[i][j] = (currentCell === 1)
                       ? (liveNeighbors === 2 || liveNeighbors === 3 ? 1 : 0) 
                       : (liveNeighbors === 3 ? 1 : 0);                     
      }
    }
    this.cells = newCells; 
  }

  state() {
    return this.cells;
  }
}