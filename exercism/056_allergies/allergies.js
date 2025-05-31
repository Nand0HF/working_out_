//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  static ALLERGENS = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };

  constructor(score) {
    this.allergyScore = score % 256; 
  }

  list() {
    const allergiesList = [];
    
    for (const allergenName in Allergies.ALLERGENS) {
      const allergenValue = Allergies.ALLERGENS[allergenName];

      if ((this.allergyScore & allergenValue) === allergenValue) {
        allergiesList.push(allergenName);
      }
    }
    return allergiesList;
  }

  allergicTo(allergen) {
    return this.list().includes(allergen);
  }
}
