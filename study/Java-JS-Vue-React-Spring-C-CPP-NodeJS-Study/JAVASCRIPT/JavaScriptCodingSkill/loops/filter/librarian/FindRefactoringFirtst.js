import { instructors } from './full.js';

const librarian = instructors.find((instructor) => instructor.libraries.includes('기념 도서관'));
console.log('librarian : ', librarian);
// librarian :  { name: '새라', libraries: [ '기념 도서관', '문헌정보학 도서관' ] }