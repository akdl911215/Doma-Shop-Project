const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([
    [lee, 'developer'],
    [kim, 'desiner'],
]);

// .has를 사용하면 요소가 존재하는지 불리언값으로 확인 가능
console.log('lee 키값이 존재하는가? : ', map.has(lee)); // lee 키값이 존재하는가? :  true
console.log('key 키값이 존재하는가? : ', map.has('key')); // key 키값이 존재하는가? :  false