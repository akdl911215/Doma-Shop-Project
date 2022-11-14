const { size } = new Map([
    ['key1', 'value'],
    ['key2', 'value2'],
]);
console.log('size : ', size); // size :  2
console.log('size type : ', typeof size); // size type :  number

const size2 = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
]);
console.log('size : ', size); // size :  2
console.log('size type : ', typeof size); // size type :  number
