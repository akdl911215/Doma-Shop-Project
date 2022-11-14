// 껏다 켰을때 재실행하기. 출력이 좀 이상했음
const CallBack2 = () => {
    console.log('1')
    setTimeout( () => console.log('2'), 1000);
    console.log('3')

    // Sychronous callback // 동기 콜백
    function printImmediately(print) {
        print()
    }
    printImmediately( () => console.log('hello'))

    // Asychronous callback // 비동기 콜백
    function printWithDelay(print, timeout) {
        print(print, timeout);
    }
    printWithDelay(() => console.log('async callback'),
        2000)

    return (
        <div className="CallBack2">
            <p>CallBack2</p>
        </div>
    )

}
export default CallBack2