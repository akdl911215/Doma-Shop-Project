const good_example = Number("432");
const bad_example = new Number("432");

console.log(typeof good_example); // "number"
console.log(typeof bad_example); // "objcet"
console.log(good_example === bad_example); // false
