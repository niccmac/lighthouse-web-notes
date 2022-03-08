'use strict';

const args = process.argv.slice(2);

const makePiggy = function(args) {
  let piggySentance = "";
  for (let i = 0; i < args.length; i++) {
    for (let c = 1; c < args[i].length; c++) {
      piggySentance += args[i][c];
    }
    piggySentance = piggySentance + (`${args[i][0]}ay `);
  }
  return piggySentance;
};
console.log(makePiggy(args));