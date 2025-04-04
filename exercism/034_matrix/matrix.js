//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
    constructor(matrixString) {
        this.rows = matrixString.split('\n').map(row => row.split(' ').map(Number));
        this.columns = this.transpose(this.rows);
    }

    transpose(matrix) {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }

    getRows() {
        return this.rows;
    }

    getColumns() {
        return this.columns;
    }
}



