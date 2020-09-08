const randomColor = require('randomcolor');
const chalk = require('chalk');

//takes in inputs from user
const chooseColor = {
  hue: process.argv[3],
  luminosity: process.argv[2],
};
const colorInput = randomColor(chooseColor);

const hexDesign = `
###############################
###############################
###############################
########                #######
########    ${colorInput}     #######
########                #######
###############################
###############################
###############################`;

//console.log(printHash(hashGenerator(31, 9)));
console.log(chalk.hex(`${colorInput}`).bold(`${hexDesign}`));

/*
//creates a 2D array of #'s and prints hex value in middle array
function hashGenerator(width, height) {
  let arr = [];
  const hexValue = colorInput;
  for (let i = 0; i < height; i++) {
    arr[i] = [];
    for (let j = 0; j < width; j++) {
      if (i < height / 2 - 1 || i > height / 2) {
        arr[i][j] = '#';
      } else if (i === height % 2 && j === width % 2) {
        arr[i][j] = hexValue;
      }
    }
  }
  return arr;
}

function printHash(hash) {
  for (let i = 0; i < hash.length; i++) {
    console.log(hash[i].join(''));
  }
}
*/
