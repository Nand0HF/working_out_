// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  if (name === 'Pure Strawberry Joy') {
    return 0.5;
  } else if (name === 'Energizer' || name === 'Green Garden') {
    return 1.5;
  } else if (name === 'Tropical Island') {
    return 3;
  } else if (name === 'All or Nothing') {
    return 5;
  } else {
    return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgesCutted = 0, wedgesIndex = 0;
  
  while (wedgesCutted < wedgesNeeded && wedgesIndex < limes.length) {
    if (limes[wedgesIndex] === 'small') {
      wedgesCutted += 6;
    } else if (limes[wedgesIndex] === 'medium') {
      wedgesCutted += 8;
    } else if (limes[wedgesIndex] === 'large') {
      wedgesCutted += 10;
    }
    wedgesIndex ++;
   
  }
  return wedgesIndex;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let ordersIndex = 0;
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[ordersIndex]);
    ordersIndex ++;
  }
  return orders.slice(ordersIndex);
}
