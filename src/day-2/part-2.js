const fs = require('fs');

const contentFile = fs.readFileSync('puzzle.txt');
const words = contentFile.toString().split('\n');

function checkDifference(firstWord, secondWord) {
  let totalDifference = 0;
  for (let i = 0; i < firstWord.length; i += 1) {
    if (firstWord[i] !== secondWord[i]) {
      totalDifference += 1;
    }
  }

  return totalDifference;
}

function getId(firstWord, secondWord) {
  const commonLetters = [];
  for (let i = 0; i < firstWord.length; i += 1) {
    if (firstWord[i] === secondWord[i]) {
      commonLetters.push(firstWord[i]);
    }
  }

  return commonLetters.join('');
}

function execPart2() {
  for (let i = 0; i < words.length; i += 1) {
    for (let j = 0; j < words.length; j += 1) {
      if (checkDifference(words[i], words[j]) === 1) {
        return getId(words[i], words[j]);
      }
    }
  }
}

console.log(execPart2());
