// 단축평가 사용법 2.
// 함수 매개변수에 기본값을 설정할 때

// 단축 평가를 사용한 매개변수의 기본값 설정
function getStringLength(str) {
    str = str || '';
    return str.length;
}

console.log(getStringLength()); // 0
console.log(getStringLength('hi')); // 2

// ES6의 매계변수의 기본값 설정
function getStringLength(str = '') {
    return str.length;
}

console.log(getStringLength()); // 0
console.log(getStringLength('hi')); // 2