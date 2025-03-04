// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let birds = birdsPerDay[0];

  for (let i = 1; i < birdsPerDay.length; i++) {
    birds += birdsPerDay[i];
  }
  return birds;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let weekIndex = (week - 1) * 7;
  let birds = birdsPerDay[weekIndex];
  for (let i = weekIndex + 1; i < weekIndex + 7; i++) {
    birds += birdsPerDay[i];
}
  return birds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length ; i += 2) {
    birdsPerDay[i] ++;
}
  return birdsPerDay;
}
