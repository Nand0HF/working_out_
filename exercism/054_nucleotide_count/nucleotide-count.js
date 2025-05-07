//
// This is only a SKELETON file for the 'Nucleotide Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function countNucleotides(strand) {
  const strandMap = {A: 0, C: 0, G: 0, T: 0};
  for (let nucleotide of strand) {
    if (strandMap[nucleotide] >= 0) {
      strandMap[nucleotide]++ ;
    } else {
      throw new Error('Invalid nucleotide in strand');
    } 
  }
  return `${strandMap['A']} ${strandMap['C']} ${strandMap['G']} ${strandMap['T']}`;
}
