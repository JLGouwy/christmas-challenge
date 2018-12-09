const fs = require('fs');

const contentFile = fs.readFileSync('puzzle.txt');
const claims = contentFile.toString().split('\n');

const wall = [];
claims.forEach(claim => {
  const regex = /#(?<position>\d*)\s@\s(?<left>\d*),(?<top>\d*):\s(?<width>\d*)x(?<height>\d*)/gm;
  const matches = regex.exec(claim);

  if (!matches) {
    return;
  }

  const {left, top, width, height} = matches.groups;

  for (let i = 0; i < width; i += 1) {
    const x = parseInt(left, 10) + i;

    for (let j = 0; j < height; j += 1) {
      const y = parseInt(top, 10) + j;
      wall[`${x},${y}`] =
        wall[`${x},${y}`] !== undefined ? wall[`${x},${y}`] + 1 : 1;
    }
  }
});

console.log(Object.values(wall).filter(value => value > 1).length);
