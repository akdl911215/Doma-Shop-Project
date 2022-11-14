// callback이란?
// javascript 에서는 callback 함수는 다른 함수의 매개변수로 함수를
// 전달하고, 어떠한 이벤트가 발생한 후 매개변수로 전달한 함수가 다시
// 호출되는 것을 의미합니다.

// callback은 쉽게 말하자면 어떤 일으 다른 객체에게 시키고, 그 일이
// 끝나는 것을 기다리지 않고 끝나고 부를 때까지 다른 일을 하는 것을
// 말합니다.
const CallBack = () => {
    const callbackAcceptingFunction1 = function (fn) {
        return fn(1, 2, 3)
    }

    const callbackAcceptingFunction2 = function (fn) {
        return fn(1, 2)
    }

    const callback = function (arg1, arg2, arg3){
        return arg1 + arg2 + arg3
    }

    const  result1 = callbackAcceptingFunction1(callback)
    console.log(result1)

    const  result2= callbackAcceptingFunction2(callback)
    console.log(result2)

    return (
        <div className="CallBack">
            <p>CallBack</p>
        </div>
    )

}
export default CallBack