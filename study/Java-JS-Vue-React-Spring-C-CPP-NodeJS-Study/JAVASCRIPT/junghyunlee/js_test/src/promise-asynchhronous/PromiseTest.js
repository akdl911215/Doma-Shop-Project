const PromiseTest = () => {
    console.log("PromiseTest Start")

    const promise = new Promise(
        function (resolve, reject) {
            setTimeout(function () {
                console.log("Hello ")
                resolve();
            }, 2000)
        }
        // then 은 체인(chain)처럼 원하는 만큼 연결이 가능하다.
    ).then(function () {
        console.log("World!!!")
    }).then(function () {
        console.log("빠세!!!!")
    }).then(function () {
        console.log("훠우!!!")
    })

    // 밑에 처럼 따로 적어도 가능하다.
    promise.then(function () {
        console.log("난혼자논다!!!내가왕따시켰다!!")
    })

    promise.then(function () {
        console.log("이것도 연결되니?")
    })

    console.log("PromiseTest Fin")

    // 출력 :
    // PromiseTest Satrt
    // PromiseTest Fin
    // Hello
    // World!!!
    // 빠세!!!!
    // 훠우!!!
    // 난혼자논다!!!내가왕따시켰다!!
    // 이것도 연결되니??
    // Hello
    // World!!!
    // 빠세!!!!
    // 훠우!!!
    // 난혼자논다!!!내가왕따시켰다!!
    // 이것도 연결되니??

    // console.log 들이 먼저 실행되고, 후에 then으로 연결된
    // 코드들이 출력된다.
    return (
        <div className="PromiseTest">
            <p>PromiseTest</p>
        </div>
    )
}

export default PromiseTest