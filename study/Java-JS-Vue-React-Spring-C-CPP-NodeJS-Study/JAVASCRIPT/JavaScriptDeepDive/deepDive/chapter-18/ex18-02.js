const increase = (num) => {
    return ++num;
};

const decrease = (num) => {
    return --num;
};

// 2. 함수는 객체에 저장할 수 있다
const predicates = { increase, decrease };

// 3. 함수의 매개변수에 전달할 수 있다
// 4. 함수의 반환값으로 사용할 수 있다
const makeCounter = (predicate) => {
    let num = 0;

    return function () {
        num = predicate(num);
        return num;
    };
}

// 3. 함수는 매개변수에게 함수를 전달할 수 있다
const increaser = makeCounter(predicates.increase);
console.log('increaser 출력값 :::: ');
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(predicates.decrease);
console.log('decreaser 출력값 ::::: ');
console.log(decreaser());
console.log(decreaser());
