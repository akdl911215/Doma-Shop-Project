const promise = new Promise(
    function (resolve, reject) {
        setTimeout(function () {
            console.log("Hello ")
            resolve("World!!!");
        }, 2000)
    }
)

promise.then(function (response) {
    console.log(response)
})

const PromiseTest2 = () => {
    console.log("PromiseTest2 Start")

    console.log("PromiseTest2 Fin")

    // 출력 :
    // PromiseTest2 Satrt
    // PromiseTest2 Fin
    // Hello
    // World!!!

    // promise 부분이 PromisTest2 밖에 선언되면
    // Hello World!!! 부분은 한번만 출력.

   return (
        <div className="PromiseTest2">
            <p>PromiseTest2</p>
        </div>
    )
}

export default PromiseTest2