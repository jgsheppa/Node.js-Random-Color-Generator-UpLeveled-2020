const randomColor = require('randomcolor');
const chalk = require('chalk');

//takes in inputs from user
const chooseColor = {
  hue: process.argv[2],
  luminosity: process.argv[3],
};
const colorInput = randomColor(chooseColor);

const hashDesign = `
###############################
###############################
###############################
########                #######
########    ${colorInput}     #######
########                #######
###############################
###############################
###############################`;

console.log(chalk.hex(`${colorInput}`).bold(`${hashDesign}`));

/*if (process.argv[2] === 'ask') {
  prompt('Which hue and/or shade would you like to pick?');
} else {
  console.log(chalk.hex(`${colorInput}`).bold(`${hashDesign}`));
}*/

/* if (process.argv[2] === 'ask') {
  console.log('Which color would you like to choose?');
} else {}
*/
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
