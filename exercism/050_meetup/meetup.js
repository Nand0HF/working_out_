//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const meetup = (year, month, week, dayOfWeek) => {
  const output = []; 
  let currentDate = new Date(year, month - 1, 1);
  const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].indexOf(dayOfWeek);

  while (currentDate.getMonth() === month - 1) {
    if (currentDate.getDay() === dayIndex) {
      output.push(new Date(currentDate));
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
  switch (week) {
    case 'first':
      return output[0];
    case 'second':
      return output[1];
    case 'third':
      return output[2];
    case 'fourth':
      return output[3];
    case 'last':
      return output.at(-1);
    default:
      return output.find((day) => day.getDate() >= 13 && day.getDate() <= 19); 
  }
};


// let startingIndex = 0;
//   let endingIndex = 0;
  
//   const dayIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//   switch (week) {
//   case 'first':
//     startingIndex = 1;
//     endingIndex = 7;
//     break;
//   case 'second':
//     startingIndex = 8;
//     endingIndex = 14;
//     break;
//   case 'third':
//     startingIndex = 15;
//     endingIndex = 21;
//     break;
//   case 'fourth':
//     startingIndex = 22;
//     endingIndex = 28;
//     break;
//   case 'last':
//     startingIndex = 22;
//     endingIndex = 28;
//     break;  
//   case 'teenth':
//     startingIndex = 13;
//     endingIndex = 19;
//     break; 
// }

  
//   for (let index = startingIndex; index <= endingIndex; index++) {
//     const currentDate = new Date(year, month - 1, index);
//     if (currentDate.getDay() === dayIndex.indexOf(dayOfWeek)) return currentDate;
//   }