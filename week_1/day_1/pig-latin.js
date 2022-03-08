'use strict';

const args = process.argv.slice(2);

const makePiggy = function(args) {
  let piggySentence = "";
  for (let i = 0; i < args.length; i++) {
    for (let c = 1; c < args[i].length; c++) {
      piggySentence += args[i][c];
    }
    piggySentence = piggySentence + (`${args[i][0]}ay `);
  }
  return piggySentence;
};
console.log(makePiggy(args));