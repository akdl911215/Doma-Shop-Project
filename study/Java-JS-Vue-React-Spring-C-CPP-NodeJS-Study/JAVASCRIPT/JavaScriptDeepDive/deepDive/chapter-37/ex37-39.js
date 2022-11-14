const map = new Map([['key1', 'value1']]);

// 존재하지 않는 key를 삭제해도 에러가 없다.
console.log("map.delete('key2'); : ", map.delete('key2')) // map.delete('key2'); :  false
console.log('map : ', map); // map :  Map(1) { 'key1' => 'value1' }
