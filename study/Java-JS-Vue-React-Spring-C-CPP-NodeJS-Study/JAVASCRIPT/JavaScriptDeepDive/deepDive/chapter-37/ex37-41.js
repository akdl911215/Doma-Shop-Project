const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([
    [lee, 'developer'],
    [kim, 'designer'],
]);
console.log('map : ', map);
// map :  Map(2) {{ name: 'Lee' } => 'developer', { name: 'Kim' } => 'designer' }
console.log('map.clear() : ', map.clear());
// map.clear() :  undefined
console.log('clear map : ', map);
// clear map :  Map(0) {}
