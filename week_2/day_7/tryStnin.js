const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding(`utf8`);



//Event handling user input

//on ANY input from stdin, outpu "." to stdout

stdin.on(`data`, (key) => {
  process.stdout.write(`.`);

  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
});

console.log(`after callback`);

