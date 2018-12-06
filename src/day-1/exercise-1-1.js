const fs = require('fs');

fs.readFile('./puzzle.txt', 'utf-8', (err, file) => {
  const lines = file.split('\n');

  const sumResult = lines.reduce((previousValue, currentValue) => currentValue + parseInt(previousValue, 10),
    0,
  );
  console.log(`resultat: ${sumResult}`);
});
