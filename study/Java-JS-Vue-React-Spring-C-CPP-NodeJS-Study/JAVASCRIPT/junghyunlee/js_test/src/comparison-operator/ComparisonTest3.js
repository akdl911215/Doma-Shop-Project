// 일치 비교
const a = 5 === 5; // true
console.log(a);

// 동등 비교와 달리 암묵적 타입 변환을 하지않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
const b = 5 === '5'; // false
console.log(b);
