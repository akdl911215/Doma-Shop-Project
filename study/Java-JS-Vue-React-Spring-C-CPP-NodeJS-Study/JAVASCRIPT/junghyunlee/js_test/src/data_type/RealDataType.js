function RealDataType() {
    // 소수점의 경우 .0의 경우 출력시 정수형과 별 다른 차이가 없음
    // 33.1 을 floatNum1 에 할당할 경우 33.1로 출력된다.
    var floatNum1 = 33.0
    var intNum = 33
    // 명확하게 0.1 형태의 숫자가 있을때는 출력한다.
    var floatNum2 = 37.1
    // .00 의 경우에는 소수점이라는 것을 알려주기 위해 . 을 표현해준다.
    var floatNum3 = 33.00
    var doubleNum1 = 33.0

    console.log("floatNum1: " + floatNum1)
    console.log("floatNum1: " + floatNum1)
    console.log("intNum: " + intNum)
    console.log("floatNum2: " + floatNum2)
    console.log("floatNum3: " + floatNum3)
    console.log("doubleNum1: " + doubleNum1)
    console.log("RealDataType: " + floatNum1)
    console.log("RealDataType: " + intNum)
    console.log("RealDataType: " + floatNum2)
    console.log("RealDataType: " + floatNum3)

    return (
        <div className="StringDataType">
            <p>
                {floatNum1}, {intNum}, {floatNum2}, {floatNum3}.
            </p>
        </div>
    )
}

export default RealDataType