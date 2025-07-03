function namesScores(arr) {
  const sortedArr = arr.sort();
  let totalScore = 0;

  for(let i = 0; i < sortedArr.length ; i++) {
    const currentName = sortedArr[i];
    let currentScore = 0;

    for (const char of currentName) {
      currentScore += char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }

    totalScore += currentScore * (i + 1); 
  }

  return totalScore;
}

// Only change code above this line
const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];

namesScores(test1);