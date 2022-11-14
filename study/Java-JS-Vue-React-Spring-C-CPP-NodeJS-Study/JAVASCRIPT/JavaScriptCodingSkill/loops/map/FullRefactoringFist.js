import { band } from './Map.js';

function getInstrument(member) {
    return member.instrument;
};

const instruments = [];
for (let i = 0; i < band.length; i++) {
    instruments.push(getInstrument(band[i]));
}
console.log('for instruments : ', instruments);
// for instruments :  [ 'guitar', 'guitar', 'bass', 'drums' ]
