const promise = new Promise(
    function (resolve, reject) {
        setTimeout(function () {
            console.log("Hello ")
            // reject를 선언함으로써
            // catch가 작동함.
            reject("Error!")
        }, 2000)
    }
)

promise.then(function (response) {
    console.log("Success")
}).then(function (response) {
    console.log("진짜로 하나면 되냐?")
}).then(function (response) {
    console.log("진짠가?")
}).then(function (response) {
    console.log("진짜네")
}).catch(function (error) {
    console.log(error)
})
// catch를 붙히면 then을 몇개를
// 연결해도 하나로 해결가능하다.

// 출력 :
// PromiseTest3 Satrt
// PromiseTest3 Fin
// Hello
// Error


const PromiseTest3 = () => {
    console.log("PromiseTest3 Start")

    console.log("PromiseTest3 Fin")

    return (
        <div className="PromiseTest3">
            <p>PromiseTest3</p>
        </div>
    )
}

export default PromiseTest3