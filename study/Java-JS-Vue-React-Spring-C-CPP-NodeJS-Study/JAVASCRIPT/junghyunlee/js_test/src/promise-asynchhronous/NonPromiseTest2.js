const NonPromiseTest2 = () => {
    function helloWorld() {
        setTimeout(function () {
            console.log("Hello ")

            setTimeout(function () {
                console.log("World ~~!!~!")
            }, 1000)
        }, 2000)
    }

    helloWorld()

    // 출력 :
    // Hello
    // World ~~!!~!
    // Hello 의 경우 코드 실행 후 출력 time out : 2초
    // World 의 경우 코드 실행 후 출력 time out : 2초 + 1초 = 3

    return (
        <div className="NonPromiseTest2">
            <p>NonPromiseTest2</p>
        </div>
    )
}

export default NonPromiseTest2
