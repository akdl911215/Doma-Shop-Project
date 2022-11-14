import { instructors } from './full.js';

let memorialInstructor;
for (let i = 0; i < instructors.length; i++) {
    // includes() 배열이 특정 요소를 포함하고 있는지 판별
    // ex) 기념 or 기념도서관 이런식으로는 팔변안됨
    if (instructors[i].libraries.includes('기념 도서관')) {
        memorialInstructor = instructors[i];
        console.log('memorialInstructor : ', memorialInstructor);
        break;
    }
}
