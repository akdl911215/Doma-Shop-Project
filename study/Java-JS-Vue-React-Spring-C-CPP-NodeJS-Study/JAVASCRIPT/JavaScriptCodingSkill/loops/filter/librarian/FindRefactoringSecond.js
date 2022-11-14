import { instructors } from './full.js';

const findByLibrary = (library) => (instructor) => instructor.libraries.includes(library);
console.log('findByLibrary : ', findByLibrary);

const librarian = instructors.find(findByLibrary('미디어교육정보 도서관'));
console.log('librarian : ', librarian);
// librarian :  { name: '짐', libraries: [ '미디어교육정보 도서관' ] }
