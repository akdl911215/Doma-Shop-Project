const name1 = "kang";
console.log("typeof name1 : ", typeof name1);

const name2: string = "kang";
console.log("typeof name2 : ", typeof name2);

let name3 = "kang";
console.log("🚀 ~ file: typeTest.ts ~ line 7 ~ name3", typeof name3);
// name3 = 1234;
// console.log("🚀 ~ file: typeTest.ts ~ ~ name3", typeof name3);
// name3 = true;
// console.log("🚀 ~ file: typeTest.ts ~ line 7 ~ name3", typeof name3);
// 위처럼 할시에는 타입 변경이 자바스크립트처럼 지원이 안된다.

let name4: any = "kang";
console.log("name4 : ", typeof name4);
name4 = 1234;
console.log("name4 : ", typeof name4);
name4 = true;
console.log("name4 : ", typeof name4);
// 타입스크립트에서 any를 사용하면 자바스크립트 처럼 타입 변경 가능
