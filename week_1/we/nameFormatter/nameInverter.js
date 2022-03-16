const nameInverter = function (name) {

  if (name === "" || name === " ") {
    return "";
  }
  if (name === undefined) {
    return "throw 'Error'";
  }
  let honorificTitle = ["Dr.", "Mr.", "Mrs.", "Ms."];
  let trimName = name.trim();
  let nameSplitArray = [];
  nameSplitArray.push(trimName.split(" "));

  // console.log(`namesArray:`, nameSplitArray);

  if (nameSplitArray[0].length === 2) {
    // console.log(`in if 2:`)
    if (honorificTitle.includes(nameSplitArray[0][0])) {

      return `${nameSplitArray[0][0]} ${nameSplitArray[0][1]}`;
    }
    // console.log(`this is what should return: ${nameSplitArray[0][1]}, ${nameSplitArray[0][0]}`)
    return `${nameSplitArray[0][1]}, ${nameSplitArray[0][0]}`;
  }

  if (nameSplitArray[0].length === 3) {
    return `${nameSplitArray[0][0]} ${nameSplitArray[0][2]}, ${nameSplitArray[0][1]}`;
  }
  if (nameSplitArray[0].length === 1) {
    
    if (honorificTitle.includes(nameSplitArray[0][0])) {
      //console.log(`title matched`);
      return "";
    }
    return nameSplitArray[0][0];

  }
  

};
console.log(nameInverter("Dr. firstname lastname"));
module.exports = nameInverter;