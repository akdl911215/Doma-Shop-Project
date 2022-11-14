function plus(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var res = num1 + num2

            console.log(num1 + " + " + num2 + " = ")
            resolve(res)
        }, 3000)
    })
}

function minus(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var res = num1 - num2

            console.log(num1 + " - " + num2 + " = ")
            resolve(res)
        }, 2000)
    })
}

function mult(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var res = num1 * num2

            console.log(num1 + " * " + num2 + " = ")
            resolve(res)
        }, 1500)
    })
}

function divide(num1, num2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var res = num1 / num2

            console.log(num1 + " / " + num2 + " = ")
            resolve(res)
        }, 1000)
    })
}

async function asyncProcess() {
    // await는 async 함수 안에서만 동작합니다.
    // 자바스크립트는 await 키워드를 만나면 프라미스가 처리(settled)될
    // 때까지 기다립니다. 결과는 그 이후 반환됩니다.

    // await('기다리다'라는 뜻)는 말 그대로 프라미스가 처리될 때까지 함수
    // 실행을 기다리게 만듭니다. 프라미스가 처리되면 그 결과와 함께 실행이
    // 재개됩니다. 프라미스가 처리되길 기다리는 동안엔 엔진이 다른 일
    // (다른 스크립트를 실행, 이벤트 처리 등)을 할 수 있기 때문에,
    // CPU 리소스가 낭비되지 않습니다.

    // await 는 promise.then 보다 좀 더 세련된게 프라미스의 result 값을
    // 얻을 수 있도록 해주는 문법입니다. promise.then 보다 가독성 좋고
    // 쓰기도 쉽습니다. 즉, then 대신 사용하면 됩니다.
    const res1 = await plus(100, 200)
    console.log(res1)
   const res2 = await minus(100, 200)
    console.log(res2)

    const res3 = await mult(100, 200)
    console.log(res3)

    const res4 = await divide(100, 200)
    console.log(res4)
}

asyncProcess()

// 출력 :
// PromiseParallelTest4 Start
// PromiseParallelTest4 Fin
// 100 + 200 =
// 300
// 100 - 200 =
// -100
// 100 * 200 =
// 20000
// 100 / 200 =
// 0.5

const PromiseParallelTest4 = () => {
    console.log("PromiseParallelTest4 Start")

    console.log("PromiseParallelTest4 Fin")

    return (
        <div className="PromiseParallelTest4">
            <p>PromiseParallelTest4</p>
        </div>
    )
}

export default PromiseParallelTest4