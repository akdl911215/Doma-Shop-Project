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
    const p1 = plus(100, 200)
    const p2 = minus(100, 200)
    const p3 = mult(100, 200)
    const p4 = divide(100, 200)

    const res1 = await p1
    const res2 = await p2
    const res3 = await p3
    const res4 = await p4

    console.log(res1)
    console.log(res2)
    console.log(res3)
    console.log(res4)
}

asyncProcess()
// 출력부분에서 100 / 200 은 1초 ... 100 + 200 은 3초이기
// 때문에 밑에 순서처럼 출력이 됩니다. 비동기적으로 들어온 값들이
// 300 -100 20000 0.5 는 순차적으로 출력하게 만듬으로써
// 밑에 순서처럼 출력이 됩니다.

// 출력 :
// PromiseParallelTest5 Start
// PromiseParallelTest5 Fin
// 100 / 200 =
// 100 * 200 =
// 100 - 200 =
// 100 + 200 =
// 300
// -100
// 20000
// 0.5

const PromiseParallelTest5 = () => {
    console.log("PromiseParallelTest5 Start")

    console.log("PromiseParallelTest5 Fin")

    return (
        <div className="PromiseParallelTest5">
            <p>PromiseParallelTest5</p>
        </div>
    )
}

export default PromiseParallelTest5