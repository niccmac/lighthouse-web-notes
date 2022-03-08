'use strict';

const args = process.argv.slice(2);

const reverseInput = function(args) {

  let output = [];

  for (let a = 0; a < args.length; a++) {
    for (let i = args[a].length; i >= 0; i--) {
      output.push(args[a][i]);
    }
    output.push(" \n");
  }

  let outputString = String(output).replaceAll(",","");

  return outputString.slice(1, -1);
};
console.log(reverseInput(args));
