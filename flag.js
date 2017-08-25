#!/usr/bin/env node

const chalk = require('chalk');

const oddStars = chalk.white.bgBlue(' * * * * * * * ') + chalk.bgRed(' ').repeat(35);
const evenStars = chalk.white.bgBlue('  * * * * * *  ') + chalk.bgWhite(' ').repeat(35);
const redFull = chalk.bgRed(' ').repeat(50);
const whiteFull = chalk.bgWhite(' ').repeat(50);

console.log(oddStars);
console.log(evenStars);
console.log(oddStars);
console.log(evenStars);
console.log(oddStars);
console.log(evenStars);
console.log(oddStars);
console.log(whiteFull);
console.log(redFull);
console.log(whiteFull);
console.log(redFull);
console.log(whiteFull);
console.log(redFull);