// 전달받은 인수가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.
function isFalsy(v) {
    return !v;
}

// 전달받은 인수가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.
function isTruthy(v) {
    return !!v
}

// 모두 true를 반환한다.
console.log('isFalsy(false) : ', isFalsy(false))
console.log('isFalsy(undefined) :  ', isFalsy(undefined) )
console.log('isFalsy(null) : ' , isFalsy(null) )
console.log('isFalsy(0) : ' , isFalsy(0) )
console.log('isFalsy(NaN) : ', isFalsy(NaN) )
console.log('isFalsy() : ', isFalsy(''))

// 모두 true를 반환한다.
console.log('isTruthy(true) : ', isTruthy(true))
console.log('isTruthy("0") : ', isTruthy('0')) // 빈 문자열이 아닌 문자열은 Truthy 값이다.
console.log('isTruthy({}) : ', isTruthy({}))
console.log('isTruthy([]) : ', isTruthy([]))