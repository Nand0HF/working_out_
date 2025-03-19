/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
  switch(remainingTime) {
    case 0:
      return 'Lasagna is done.';
    case undefined:
      return 'You forgot to set the timer.';
    default:
      return 'Not done, please wait.';
  }
}

export function preparationTime(layers, timePerLayer) {
  if (timePerLayer == null) {
    return layers.length * 2;
  } else
    return layers.length * timePerLayer;
}

export function quantities(layers) {
  let noodlesAmount = 0, sauceAmount = 0;
  for (let index = 0; index < layers.length; index++) {
    if (layers[index] === 'noodles') {
      noodlesAmount += 50;
    } else if (layers[index] === 'sauce') {
      sauceAmount += 0.2;
    }
  }
  return {
    noodles: noodlesAmount,
    sauce: sauceAmount
  };
}

export function addSecretIngredient(friendsList, myList) {
  console.log(myList.push(friendsList[friendsList.length - 1]));
}

export function scaleRecipe(recipe, portionNumber) {
  const myRecipe = {...recipe}
  let multiplier = portionNumber / 2;
  for (let key in myRecipe) {
    myRecipe[key] *= multiplier;
  }
  return myRecipe;
}







