const round = function(number) {
  return Math.round(number * 100) / 100;
};

const stdev = function(arr) {
  let sumArr =  0;
  for (let num of arr) {
    sumArr += num;
  }
  let mean = sumArr / arr.length;
  let sumOfSquares = 0;
  for (let num of arr) {
    let squareMe = num - mean;
    sumOfSquares += (squareMe * squareMe);
  }
  let variance = sumOfSquares / (arr.length);
  let square = Math.sqrt(round(variance));
  return round(square);
};

stdev([6,2,3,4,9,6,1,0,5]);