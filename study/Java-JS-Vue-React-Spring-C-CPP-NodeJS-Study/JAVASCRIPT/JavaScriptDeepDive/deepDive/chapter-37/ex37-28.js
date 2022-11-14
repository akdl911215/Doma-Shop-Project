const map = new Map([
    ['key1', 'value'],
    ['key1', 'value2'],
]);
console.log('map : ', map); // map :  Map(1) { 'key1' => 'value2' }
// Map은 인수로 전달한 이터러블에 중복된 키를 갖는 요소가 존재하면 값이 덮어써진다.

const map2 = new Map([
    ['key1', 'value'],
    ['key1', 'value2'],
    ['key2', 'value2'],
]);
console.log('map2 : ', map2); // map2 :  Map(2) { 'key1' => 'value2', 'key2' => 'value2' }
