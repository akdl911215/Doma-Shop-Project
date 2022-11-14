import { tm } from './Filter.js';

const daves = [];
for (let i = 0; i < tm.length; i++) {
    if (tm[i].match(/Dav/)) {
        daves.push(tm[i]);
    }
}
console.log('daves : ', daves);
// daves :  [ 'Dave L', 'Dave C' ]
