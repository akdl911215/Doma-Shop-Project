const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

map.set(lee, 'developer').set(kim, 'designer');
console.log('map : ', map); // map :  Map(2) {{ name: 'Lee' } => 'developer', { name: 'Kim' } => 'designer' }

console.log('map.delete(kim) : ', map.delete(kim)); // map.delete(kim) :  true
console.log('delete map : ', map); // delete map :  Map(1) { { name: 'Lee' } => 'developer' }
