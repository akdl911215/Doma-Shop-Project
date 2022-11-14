const map = new Map();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

// 객체도 키로 사용이 가능
map.set(lee, 'developer').set(kim, 'designer').set(kim, 'backsoo');

console.log('map : ', map); // map :  Map(2) { { name: 'Lee' } => 'developer', { name: 'Kim' } => 'backsoo' }

