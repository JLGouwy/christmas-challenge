const fs = require('fs');

const contentFile = fs.readFileSync('puzzle.txt');
const lines = contentFile.toString().split('\n');
/**
 * At first, I used a simple Array with push and includes.
 * The execution of the script : node part-2.js  14,81s user 0,04s system 99% cpu 14,884 total
 * Then, I used the Set object.
 * The execution of the script : node part-2.js  0,09s user 0,02s system 99% cpu 0,108 total
 */
const uniqueFrequencies = new Set();
let duplicateFound = false;
let i = 0;
let currentValue = 0;

while (!duplicateFound) {
  if (i === lines.length) {
    i = 0;
  }

  currentValue += parseInt(lines[i], 10);

  duplicateFound = uniqueFrequencies.has(currentValue); // instead of includes().

  uniqueFrequencies.add(currentValue); // instead of push().

  i += 1;
}

console.log(`result: ${currentValue}`);
