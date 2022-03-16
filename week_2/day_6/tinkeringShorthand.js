let firstObj = "I am the first object";
let secondObj = 2;
let thirdObj = (num) => num * 3;

let myObj = {
  firstObj,
  secondObj,
  thirdObj
};

let test = myObj.thirdObj(1);

console.log(test);