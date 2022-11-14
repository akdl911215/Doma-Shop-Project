const map = new Map();
console.log('map :::: ', map); // map ::::  Map(0) {}

map.set('key1', 'apple').set('key1', 'banana').set('key2', 'water-mellon').set('key3', 'orange');

console.log('map :: ', map); // map ::  Map(3) { 'key1' => 'banana', 'key2' => 'water-mellon', 'key3' => 'orange' }
