const map = new Map();
console.log('map :::: ', map); // map ::::  Map(0) {}

map.set('key1', 'apple');
map.set('key1', 'banana'); // Map은 중복된 키를 갖는 요소가 존재할 수 없기 때문에 중복된 키를 갖는 요소를 추가하면 값이 덮어짐

map.set('key2', 'water-mellon');
map.set('key3', 'orange');

console.log('map :: ', map); // map ::  Map(3) { 'key1' => 'banana', 'key2' => 'water-mellon', 'key3' => 'orange' }
