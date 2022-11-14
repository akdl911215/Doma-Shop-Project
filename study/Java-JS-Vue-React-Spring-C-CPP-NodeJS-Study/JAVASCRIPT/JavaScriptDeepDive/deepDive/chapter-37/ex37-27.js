const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
]);
console.log('map :: ', map); // map ::  Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

const map2 = new Map([
    [key1, 'value1'],
    [key2, 'value2'],
]);
console.log('map2 :: ', map2); // ReferenceError

const map3 = new Map([
    ['key1', value1],
    ['key2', value2],
]);
console.log('map3 :: ', map3); // ReferenceError

const map4 = new Map([
    [key1, value1],
    [key2, value2],
]);
console.log('map4 :: ', map4); // ReferenceError

const map5 = new Map([1, 2])
console.log('map5 :: ', map5) // TypeError