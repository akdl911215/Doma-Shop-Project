let ONE = 1;
let TWO = 2;

if (TWO > ONE) [ONE, TWO] = [TWO, ONE];

console.log("ONE : ", ONE, ", TWO : ", TWO);

let first;
let value;

console.log("typeof first : ", typeof first);
if (first === undefined) first = integer(4);
console.log("first : ", first);
console.log("typeof first : ", typeof first);
