const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
]);

console.log(Object.getOwnPropertyDescriptor(Map.prototype, 'size'));
// { get: [Function: get size], set: undefined, enumerable: false, configurable: true }

map.size = 10; // 사이즈 변경이 무시된다
console.log('map.size : ', map.size); // map.size :  2
