//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ResistorColorTrio {
  static colorCode = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9
  };

  constructor(colorArray) {
    if (!(colorArray[0] in ResistorColorTrio.colorCode) || !(colorArray[1] in ResistorColorTrio.colorCode) || !(colorArray[2] in ResistorColorTrio.colorCode)) throw new Error('invalid color');
    

    this.color1 = colorArray[0];
    this.color2 = colorArray[1];
    this.color3 = colorArray[2];
  }

  get label() {
    const digit1 = ResistorColorTrio.colorCode[this.color1];
    const digit2 = ResistorColorTrio.colorCode[this.color2];
    const zeros = ResistorColorTrio.colorCode[this.color3];

    let resistanceValue = parseInt(`${digit1}${digit2}` + '0'.repeat(zeros));
    let unit = 'ohms';

    if (resistanceValue >= 1000) {
      resistanceValue /= 1000;
      unit = 'kiloohms';
    }

    return `Resistor value: ${resistanceValue} ${unit}`;
  }
}
