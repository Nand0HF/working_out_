//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const DAY_ELEMENTS = [
    ["first", "a Partridge in a Pear Tree"],
    ["second", "two Turtle Doves"],
    ["third", "three French Hens"],
    ["fourth", "four Calling Birds"],
    ["fifth", "five Gold Rings"],
    ["sixth", "six Geese-a-Laying"],
    ["seventh", "seven Swans-a-Swimming"],
    ["eighth", "eight Maids-a-Milking"],
    ["ninth", "nine Ladies Dancing"],
    ["tenth", "ten Lords-a-Leaping"],
    ["eleventh", "eleven Pipers Piping"],
    ["twelfth", "twelve Drummers Drumming"]
];

export const dayConstructor = (day) => {
    let auxOutput = `On the ${DAY_ELEMENTS[day - 1][0]} day of Christmas my true love gave to me: `;
    let gifts = [];

    for (let index = day - 1; index >= 0; index--) {
        gifts.push(DAY_ELEMENTS[index][1]);
    }

    if (gifts.length > 1) {
        const lastGift = gifts.pop();
        auxOutput += `${gifts.join(', ')}, and ${lastGift}.`;
    } else {
        auxOutput += `${gifts[0]}.`; 
    }

    return auxOutput;
};

export const recite = (initialDay, endingDay = initialDay) => {
    let output = '';

    while (initialDay <= endingDay) {
        output += dayConstructor(initialDay) + '\n';
      if (initialDay < endingDay) output += '\n';
        initialDay++;
    }

    return output;
};
