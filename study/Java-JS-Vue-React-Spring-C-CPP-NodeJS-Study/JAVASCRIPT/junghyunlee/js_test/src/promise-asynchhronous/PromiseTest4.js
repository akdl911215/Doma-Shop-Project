const promise = new Promise(
    function (resolve, reject) {
        setTimeout(function () {
            console.log("Hello ")
            reject("Error!")
            //resolve("Wow!")
        }, 2000)
    }
)

promise.then(function (response) {
    console.log("Success")
}).catch(function (error) {
    console.log(error)
}).finally(() => {
    // fanally 를 할당하면 resolce, reject 상관
    // 없이 실행이 무조건 된다.
    console.log("나는 무조건 실행된다!!!")
})

// 출력 :
// PromiseTest4 Satrt
// PromiseTest4 Fin
// Hello
// Error
// 나는 무조건 실행된다!!!

const PromiseTest4 = () => {
    console.log("PromiseTest4 Start")

    console.log("PromiseTest4 Fin")

    return (
        <div className="PromiseTest4">
            <p>PromiseTest4</p>
        </div>
    )
}

export default PromiseTest4