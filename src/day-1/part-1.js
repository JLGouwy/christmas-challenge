const fs = require('fs');

fs.readFile('puzzle.txt', 'utf-8', (err, file) => {
  const lines = file.split('\n');

  const sumResult = lines.reduce(
    (previousValue, currentValue) => parseInt(currentValue, 10) + previousValue,
    0,
  );

  console.log(`results: ${sumResult}`);
});
