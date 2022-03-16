const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      printItems(item);
    } else {
      console.log(item);
    }
  });
};
const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];;
printItems(array);