const fs = require('fs');

const contentFile = fs.readFileSync('puzzle.txt');
const lines = contentFile.toString().split('\n');
const uniqueFrequencies = [];
let duplicateFound = false;
let i = 0;
let currentValue = 0;

while (!duplicateFound) {
  if (i === lines.length) {
    i = 0;
  }

  currentValue += parseInt(lines[i], 10);

  duplicateFound = uniqueFrequencies.includes(currentValue);

  uniqueFrequencies.push(currentValue);

  i += 1;
}

console.log(`result: ${currentValue}`);
