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

// function 앞에 async 를 붙이면 해당 함수는 항상 프라미스를 반환합니다.
// 프라미스가 아닌 값을 반환하더라도 이행 상태의 프라미스(resolved promise)
// 로 값을 감싸 이행된 프라미스가 반환되도록 합니다.
async function asyncProcess() {
    const res = await Promise.all(
        [
            plus(100, 200),
            minus(100, 200),
            mult(100, 200),
            divide(100, 200)
        ]
    )

    console.log(res)
}

asyncProcess()

// 출력 :
// PromiseParallelTest7 Start
// PromiseParallelTest7 Fin
// 100 / 200 =
// 100 * 200 =
// 100 - 200 =
// 100 + 200 =
// [300, -100, 20000, 0.5]

const PromiseParallelTest7 = () => {
    console.log("PromiseParallelTest7 Start")

    console.log("PromiseParallelTest7 Fin")

    return (
        <div className="PromiseParallelTest7">
            <p>PromiseParallelTest7</p>
        </div>
    )
}

export default PromiseParallelTest7
