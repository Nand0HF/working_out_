//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (series === '') {
      throw new Error('series cannot be empty');
    }
    this.seriesArray = series.split('').map(Number);
  }

  slices(sliceLength) {
    if (sliceLength > this.seriesArray.length) {
      throw new Error('slice length cannot be greater than series length');
    }
    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    }
    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }

    const subseries = [];
    for (let i = 0; i <= this.seriesArray.length - sliceLength; i++) {
      subseries.push(this.seriesArray.slice(i, i + sliceLength));
    }
    return subseries;
  }
}