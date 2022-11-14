const num = Number.EPSILON;
console.log(num);
// 2.220446049250313e-16
console.log(typeof num);
// number

// Number.EPSILON은 1에 더했을 때 1보다 큰 수를 만들어 낼 수 있는 가장 작은 양수이다.
// Number.EPSILON보다 작은 수를 1에 더해도, 그 수는 1과 같다.
// 0이 아닌 양수를 1에 더했는데도 1이라는 사실은 터무니 없어보인다.
// 그 이유는 IEEE 754를 포함한 모든 고정 크기 부동소수점 시스템은 전부 이런 이상한 점을 가지고 있다.
// 숫자 표현의 크기를 고정함으로써 생기는 장단점이다.

const num2 = Number.MAX_SAFE_INTEGER;
console.log(num2);
// 9007199254740991 > 약 9천조

// 자바스크립트는 Number.MAX_SAFE_INTEGER 까지의 모든 정수형을 표현할 수 있으므로 다른 정수형 타입이 필요 없다.
// 자바스크립트의 숫자형은 부호를 포함한 54비트를 사용한다.
// Number.MAX_SAFE_INTEGER 보다 큰 수에 1을 더하는 것은 0을 더하는 것이나 마찬가지다.
// 자바스크립트는 값이나 연산 결과, 그리고 중간 연산 값들이 전부 -Number.MAX_SAFE_INTEGER와
// Number.MAX_SAFE_INTEGER 사이의 정수 값인 경우에만 올바른 정수 연산을 할 수 있다.

// 이 범위 안에서는 일반적인 수학적 연산이 가능하다. 결합법칙과 분배법칙 역시 적용된다.
// 하지만 범위를 벗어나게 되면, 모든 것이 혼돈이 된다. 숫자를 더하는 순서에 따라서 그 합이 바뀔 수도 있다.

// ((0.1 + 0.2) + 0.3)의 결과 값이 (0.1 + (0.2 + 0.3))보다 더 클 수 있다는 뜻이다.
// Number.isSafeInteger(number)는 숫자가 안전한 범위 내에 있는 경우 true를 반환한다.

const num3 = Number.isInteger(1);
const num4 = Number.isInteger(9007199254740991);
const num5 = Number.isInteger(90071992547409919007199254740991);
console.log(num3); // true
console.log(num4); // true
console.log(num5); // true

// Number.isInteger(number)는 숫자가 안전한 범위 안에 있든 그 밖에 있든 true를 반환한다.
// Number.MAX_SAFE_INTEGER보다 큰 수는 정수로 간주하는데, 몇몇 경우에는 맞지만, 대부분 틀리다.

// Number.MAX_VALUE는 자바스크립트가 표현할 수 있는 가장 큰 숫자를 의미한다.
// 그 값은 Number.MAX_SAFE_INTEGER * 2 ** 971 과 동일하다

const num6 = Number.MAX_VALUE;
console.log(num6);
// 1.7976931348623157e+308
const num7 = Number.MAX_SAFE_INTEGER * 2 ** 971;
console.log(num7);
// 1.7976931348623157e+308

// 이 값은 뒤에 308개의 숫자가 더 존재한다. 이 값의 대부분은 실제가 없는 유효숫자이다.
// 이 숫자는 15.9개의 유효 숫자를 제공할 뿐이다. 나머지 292개의 숫자는 밑수 2로는 10진수를 제대로 표현하지
// 못하기 때문에 생긴 값들이다.

// Number.MAX_VALUE에 안전한 범위 안에 있는 어떤 양의 정수르 더해도 그 값은 여전히 Number.MAX_VALUE이다.
// 계산 결과로 Number.MAX_VALUE를 만드는 프로그램은 뭔가 잘못 되었을 가능성이 크다.
// Number.MAX_SAFE_INTEGER를 넘는 모든 결과는 이상할 수 있다.

// IEEE 754 표준은 엄청나게 넓은 범위를 보장해 주기는 하지만, 각별히 신경 쓰지 않는 이상 실수로 이어지기 십상이다.
const num8 = Number.MIN_VALUE;
console.log(num8); // 5e-324

// Number.MIN_VALUE는 영(0)보다 큰 수 중에서 가장 작은 수이다.
const num9 = 2 ** -1074;
console.log(num9); // 5e-324
// 값은 2 ** -1074 와 동일하다. Number.MIN_VALUE보다 작은 양수는 영(0)과 구별이 불가느아다.
// Number.MIN_VALUE의 유효 숫자는 최하위 비트 단 한개만 포함하고 있으며, 이 비트로 인해 수 없이 많은,
// 환상에 불과한 유효 숫자가 만들어진다.

// Number.prototype은 모든 수가 상속하는 객체이다. Number.prototype은 많은 메서드를 포함하고 있지만
// 아쉽게도 그다지 유용하지 않다.
