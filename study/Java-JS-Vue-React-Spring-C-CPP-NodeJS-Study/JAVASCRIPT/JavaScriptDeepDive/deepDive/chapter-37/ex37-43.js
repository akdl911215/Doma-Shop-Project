const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([
    [lee, 'developer'],
    [kim, 'designer'],
]);

// Map 객체는 Map.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다
// Symbol.iterator는 객체에 대응하는 기본 이터레이터를 지정. for ... of 와 같이 사용된다
console.log(Symbol.iterator in map); // true

// 이터러블인 Map 객체는 for ... of문으로 순회할 수 있다
for (const en of map) {
    console.log('en : ', en);
}
// en :  [ { name: 'Lee' }, 'developer' ]
// en :  [ { name: 'Kim' }, 'designer' ]

// 이터러블인 Map 객체는 스프레드(Rest) 문법의 대상이 될 수 있다
console.log('[...map] : ', [...map]); // [...map] :  [ [ { name: 'Lee' }, 'developer' ], [ { name: 'Kim' }, 'designer' ] ]

// 이터러블인 Map 객체는 배열 디스트럭처링 할당의 대상이 될 수 있다
const [a, b] = map;
console.log('a : ', a);
// [ { name: 'Lee' }, 'developer' ]
console.log('b : ', b);
// [ { name: 'Kim' }, 'designer' ]
console.log('a, b : ', a, b);
// [ { name: 'Lee' }, 'developer' ] [ { name: 'Kim' }, 'designer' ]
