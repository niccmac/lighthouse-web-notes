
const titleCase = (string) => {
  if (string === "") {
    return "";
  }
  let inputArray = string.split("");
  let firstLetter = inputArray[0];
  console.log(`fl is string`, firstLetter);
  let titleCaseString = firstLetter.toUpperCase();
  for (let chara = 1; chara < inputArray.length; chara++) {
    if (inputArray[chara] === " ") {
      titleCaseString += ` ${inputArray[chara + 1].toUpperCase()}`;
      chara++;
    } else {
      titleCaseString += `${inputArray[chara].toLowerCase()}`;
    }
  }

  return titleCaseString;
};

let test1 = titleCase("this is an example");
let test2 = titleCase("test");
let test3 = titleCase("i r cool");
let test4 = titleCase("WHAT HAPPENS HERE");
let test5 = titleCase("");
let test6 = titleCase("A");


console.log(test6);


 