const randomColor = require('randomcolor');
const chooseColor = {
  hue: process.argv[3],
  luminosity: process.argv[2],
};
const colorInput = randomColor(chooseColor);

function hashGenerator(width, height) {
  let arr = [];
  for (let i = 0; i < height; i++) {
    arr[i] = [];
    for (let j = 0; j < width; j++) {
      if (i < height / 2 || i > height / 2) {
        arr[i][j] = '#';
      } else if (i === height / 2) {
        arr[i][j] = colorInput;
      }
    }
  }
  arr.join(' ');
  return arr;
}

//console.log(color);
console.log('%c#', `color: ${colorInput}`);
