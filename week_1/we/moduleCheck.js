console.log(module);


const sayHelloTo = function(person) {
  console.log(`Hello, ${person}`);
};

// add file to export

module.exports = sayHelloTo;
