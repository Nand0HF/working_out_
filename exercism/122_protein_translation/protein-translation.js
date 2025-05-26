//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rnaSequence) => {
  if (!rnaSequence) {
    return [];
  }

  const codonMap = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP',
  };

  const proteins = [];
  for (let i = 0; i < rnaSequence.length; i += 3) {
    const codon = rnaSequence.slice(i, i + 3);
    if (codon.length !== 3) {
      throw new Error('Invalid codon');
    }
    if (!codonMap.hasOwnProperty(codon)) {
      throw new Error('Invalid codon');
    }
    if (codonMap[codon] === 'STOP') {
      break; 
    }
    proteins.push(codonMap[codon]);
  }

  return proteins;
};