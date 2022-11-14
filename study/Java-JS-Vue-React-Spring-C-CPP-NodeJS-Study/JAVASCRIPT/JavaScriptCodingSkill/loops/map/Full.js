import { band } from './map.js';

const instruments = [];
console.log('instruments : ', instruments);

for (let i = 0; i < band.length; i++) {
    const instrument = band[i].instrument;
    instruments.push(instrument);
}
console.log('for instruments : ', instruments);
// for instruments :  [ 'guitar', 'guitar', 'bass', 'drums' ]
