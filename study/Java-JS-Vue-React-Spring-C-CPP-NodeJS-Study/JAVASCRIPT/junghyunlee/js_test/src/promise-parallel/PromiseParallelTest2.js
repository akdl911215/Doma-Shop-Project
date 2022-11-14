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

// all 은 전부 출력
Promise.all([
    plus(100, 200),
    minus(100, 200),
    mult(100, 200),
    divide(100, 200)
]).then(response => console.log(response))

// 출력 :
// PromiseParallelTest2 Start
// PromiseParallelTest2 Fin
// 100 / 200 =
// 100 * 200 =
// 100 - 200 =
// 100 + 200 =
// [300, -100, 20000, 0.5]

const PromiseParallelTest2 = () => {
    console.log("PromiseParallelTest2 Start")

    console.log("PromiseParallelTest2 Fin")

    return (
        <div className="PromiseParallelTest2">
            <p>PromiseParallelTest2</p>
        </div>
    )
}

export default PromiseParallelTest2
