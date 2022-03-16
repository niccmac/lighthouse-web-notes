let cipher = {
  a:1,
  b:2,
  c:3,
  d:4,
  e:5,
  f:6,
  g:7,
  h:8,
  i:9,
  j:10,
  k:11,
  l:12,
  m:13,
  n:14,
  o:15,
  p:16,
  q:17,
  r:18,
  s:19,
  t:20,
  u:21,
  v:22,
  w:23,
  x:24,
  y:25,
  z:26,
  xx: " "
};
let cipherPlusKey = {
  a:1,
  b:2,
  c:3,
  d:4,
  e:5,
  f:6,
  g:7,
  h:8,
  i:9,
  j:10,
  k:11,
  l:12,
  m:13,
  n:14,
  o:15,
  p:16,
  q:17,
  r:18,
  s:19,
  t:20,
  u:21,
  v:22,
  w:23,
  x:24,
  y:25,
  z:26
};
const encrypt  = (plaintext, key) => {
  let plaintextToArray = plaintext.split("");
  let plaintextValue = [];
  let returnArray = [];
  for (let letters in cipherPlusKey) {
    cipherPlusKey[letters] = cipherPlusKey[letters] + key;
  }
  // console.log(`cipher plus key array:`, cipherPlusKey);

  for (let chara of plaintextToArray) {
    console.log(`chara is:`, chara);
    if (chara === " ") {
      plaintextValue.push("xx");
    } else {
      plaintextValue.push(cipherPlusKey[chara]);
    }
  }
  console.log(`value of chara`,plaintextValue);
  console.log(`length ptv:`, plaintextValue.length);
  for (let keys in cipher) {
    for (let num of plaintextValue) {
      console.log(`num of ptv:`, num);
      let value = plaintextValue[num];
      returnArray.push(keys[value]);
    }
  }
  return returnArray;

};

console.log(encrypt("e", -3));

module.exports = {encrypt};