const SpreadTest3 = () => {
    let arr = [1, 2, 3]

    console.log(arr)

    // ??? 현재 굉장히 거슬릴것임
    // 1) 함수 내에 함수가 들어있음
    // 2) 입력 인자에 데이터타입이 없음
    function spreadArrPrint(a, b, c) {
        console.log("spreadArrPrint3: " + a)
        console.log("spreadArrPrint3: " + b)
        console.log("spreadArrPrint3: " + c)
    }

    spreadArrPrint(...arr)

    return (
        <div className="SpreadTest3">
            <p>
                SpreadTest3
            </p>
        </div>
    )
}

export default SpreadTest3