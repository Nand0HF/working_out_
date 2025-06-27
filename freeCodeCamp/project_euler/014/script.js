function longestCollatzSequence(limit) {
  let chainNumPair = [0, 0];
  for(let num = 1; num <= limit ; num++) {

    let currentChain = 0;
    let auxNum = num;

    while (auxNum !== 1) {
      auxNum = auxNum % 2 === 0 ? auxNum / 2 : auxNum * 3 + 1;
      currentChain++ ;
    }
    if (currentChain > chainNumPair[1]){
      chainNumPair[1] = currentChain;
      chainNumPair[0] = num;
    }
  }
  return chainNumPair[0];
}

longestCollatzSequence(14);