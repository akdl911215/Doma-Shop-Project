import { tm } from './Filter.js';

const daves = tm.filter(member => member.match(/Dav/))
console.log('daves : ', daves)
// daves :  [ 'Dave L', 'Dave C' ]