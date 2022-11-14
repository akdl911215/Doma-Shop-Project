function sumNum(number) {
    return number + number;
}

// console.dir(sumNum);

// console.log(Object.getOwnPropertyDescriptors(sumNum));

// __proto__는 square 함수의 프로퍼티가 아니다
console.log(Object.getOwnPropertyDescriptor(sumNum, '__proto__'));
// 출력 : undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다
// sumNum() 는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'))

