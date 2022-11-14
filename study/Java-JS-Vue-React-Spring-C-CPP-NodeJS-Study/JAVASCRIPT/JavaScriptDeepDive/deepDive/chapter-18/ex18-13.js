// 함수 객체는 prototype 프로퍼티를 소유한다
console.log(function () {}.hasOwnProperty('prototype')); // 결과 : true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다
console.log({}.hasOwnProperty('prototype')); // 결과 : false
