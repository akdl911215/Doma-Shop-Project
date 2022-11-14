import { band } from './Map.js';

function getInstrument(member) {
    return member.instrument;
}

// map() 메서드를 사용하면 새로운 값을 담을 배열을 준비할 필요가 없다
// map()에는 배열 메서드의 일부로 포함되어 있기 때문이다
const instruments = band.map(getInstrument);
console.log('instruments : ', instruments);
// instruments :  [ 'guitar', 'guitar', 'bass', 'drums' ]
