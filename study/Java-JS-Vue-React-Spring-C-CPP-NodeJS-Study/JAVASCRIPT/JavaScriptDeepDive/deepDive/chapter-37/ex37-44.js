const lee = { name: 'Lee' };
const kang = { name: 'Kang' };

const map = new Map([
    [lee, 'developer'],
    [kang, 'student'],
]);

// Map.prototype.keys 는 Map 객체에서 요소키를 값으로 갖는 이터레이터를 반환한다
for (const key of map.keys()) {
    console.log(key); // { name: 'Lee' } { name: 'Kang' }
}

// Map.prototype.values 는 Map 객체에서 요소값을 값으로 갖는 이터레이터를 반환한다
for (const value of map.values()) {
    console.log(value); // developer student
}

// Map.prototype.emtries 는 Map 객체에서 요소키와 요소값을 값으로 갖는 이터레이터를 반환한다
for (const entry of map.entries()) {
    console.log(entry) // [ { name: 'Lee' }, 'developer' ] [ { name: 'Kang' }, 'student' ]
}
