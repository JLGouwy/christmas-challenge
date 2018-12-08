const fs = require('fs');

let totalTwice = 0;
let totalThree = 0;
const contentFile = fs.readFileSync('puzzle.txt');
const words = contentFile.toString().split('\n');

function parseWord(word) {
  const lettersInWord = {};

  for (let j = 0; j < word.length; j += 1) {
    const letter = word.charAt(j);

    lettersInWord[letter] =
      letter in lettersInWord ? lettersInWord[letter] + 1 : 1;
  }

  const lettersCount = new Set(Object.values(lettersInWord));

  if (lettersCount.has(2)) {
    totalTwice += 1;
  }

  if (lettersCount.has(3)) {
    totalThree += 1;
  }
}

words.forEach(parseWord);

console.log(`${totalTwice}*${totalThree} = ${totalTwice * totalThree}`);
