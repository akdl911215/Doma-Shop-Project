const promise = new Promise(
    function (resolve, reject) {
        setTimeout(function () {
            console.log("Hello ")
            resolve("World!")
        }, 2000)
    }
)

// response 사전적의미 : 대답, 응답, 회신, 답장.
promise.then(function (response) {
    console.log(response)

    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("JavaScript Programming")
            resolve("~~!!~!")
        }, 1000)
    })
}).then(response =>
    console.log("Success")
).catch(function (error) {
    console.log(error)
}).finally(() => {
    console.log("PromiseTest7: 나는 무조건 실행된다!!!")
})

// 출력 :
// PromiseTest7 Satrt
// PromiseTest7 Fin
// Hello
// World!
// JavaScript Programing
// Success
// PromiseTest7: 나는 무조건 실행된다!!!

const PromiseTest7 = () => {
    console.log("PromiseTest7 Start")

    console.log("PromiseTest7 Fin")

    return (
        <div className="PromiseTest7">
            <p>PromiseTest7</p>
        </div>
    )
}

export default PromiseTest7
