const regexPattern = /[^A-Za-z0-9]+/g;
const userInput = document.getElementById('text-input').value;
const resultElement = document.getElementById('result');
const checkButton = document.getElementById('check-btn');

function isPalindrome(str) {
  if (str === '') {
    alert('Please input a value');
  } else {
    const newStr1 = str.replace(regexPattern, '');
    const newStr2 = newStr1.split('').reverse().join('');

      if (newStr1.toLowerCase() === newStr2.toLowerCase()) {
        resultElement.textContent = str + ' is a palindrome';
      } else {
        resultElement.textContent = str + ' is not a palindrome';
        }
    }
}

checkButton.addEventListener('click', () => {
  const userInput = document.getElementById('text-input').value;
  isPalindrome(userInput);
});