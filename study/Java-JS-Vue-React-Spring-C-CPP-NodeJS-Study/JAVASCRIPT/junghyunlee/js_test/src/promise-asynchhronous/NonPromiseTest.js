
const NonPromiseTest = () => {
    function hello() {
        setTimeout(function () {
            console.log("Hello ")
        }, 2000)
    }

    function world() {
        setTimeout(function () {
            console.log("World!!!")
        }, 1000)
    }

    hello()
    world()

    // 출력 :
    // World!!!
    // Hello
    // World 의 경우 코드 실행 후 출력 time out : 1초
    // Hello 의 경우 코드 실행 후 출력 time out : 2초

    return (
        <div className="NonPromiseTest">
            <p>NonPromiseTest</p>
        </div>
    )
}

export default NonPromiseTest
