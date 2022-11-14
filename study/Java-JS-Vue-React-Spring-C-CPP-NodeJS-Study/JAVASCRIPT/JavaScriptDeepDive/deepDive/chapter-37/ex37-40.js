const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([
    [lee, 'developer'],
    [kim, 'designer'],
]);
console.log('map.delete(lee) : ', map.delete(lee)); // map.delete(lee) :  true
// console.log('map.delete(lee) : ', map.delete(lee).delete(kim)); : delete연속적으로 사용시 Type Error 발생
