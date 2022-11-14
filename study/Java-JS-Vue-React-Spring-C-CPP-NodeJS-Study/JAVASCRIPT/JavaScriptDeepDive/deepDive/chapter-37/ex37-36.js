const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

map.set(lee, 'bank-clerk').set(kim, 'student');

console.log('map.get(lee) : ', map.get(lee)); // map.get(lee) :  bank-clerk
console.log('map.get(key) : ', map.get('key')); // undefined
console.log('map.get(student) : ', map.get('student')); // undefined
// console.log('map.get(student) : ', map.get(student)); // error
