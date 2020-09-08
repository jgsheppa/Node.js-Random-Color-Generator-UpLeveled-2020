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

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//
if (process.argv[2] === 'ask') {
  rl.question('Which hue would you like? ', function (answer1) {
    rl.question('Which luminationn would you like? ', function (answer2) {
      const colorInputAskFor = randomColor({
        hue: answer1,
        luminosity: answer2,
      });
      console.log(
        'Thank you for your valuable feedback:',
        chalk.hex(`${colorInputAskFor}`).bold(`${hashDesign}`),
      );
      rl.close();
    });
  });
} else {
  console.log(chalk.hex(`${colorInput}`).bold(`${hashDesign}`));
}

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
function hashGenerator(dimensions) {
  const width = dimensions.splice(0, 1);
  const height = dimensions.splice(3, 4);
  console.log(width)
  console.log(height)
  let arr = [];
  for (let i = 0; i < height; i++) {
    arr[i] = [];
    for (let j = 0; j < width; j++) {
      arr[i][j] = '#';
    }
  }
  return arr;
}

function printHash(hash) {
  let newHash = [];
  for (let i = 0; i < hash.length; i++) {
    newHash = hash[i].join('');
  }
  return newHash;
}

let hashBoard = printHash(hashGenerator(process.argv[2], process.argv[3]));
//console.log(chalk.hex(`${colorInput}`).bold(`${hashBoard}`));*/
