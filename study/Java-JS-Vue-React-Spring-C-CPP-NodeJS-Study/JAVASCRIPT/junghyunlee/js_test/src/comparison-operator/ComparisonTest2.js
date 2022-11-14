const a = '0' == ''; // false
console.log(a)

const b = 0 == '0'; // true
console.log(b)

const c = 0 == '0'; // true
console.log(c)

const d = false == 'false'; // false
console.log(d)

const e = false == '0'; // true
console.log(e)

const f = false == null; // false
console.log(f)

const g = false == undefined; // false
console.log(g)