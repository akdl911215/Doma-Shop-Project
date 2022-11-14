function ExpDataType() {
    // 123 x 10^5

    // 예상 결과 : 12300000
    var expNum1 = 123e5
    // 123 x 10^-5
    // 예상결과 0.00123
    var expNum1 = 123e5
    // 123 x 10^-5
    var expNum2 = 123e-5


    console.log("ExpDataType:" + expNum1)
    console.log("ExpDataType:" + expNum2)

    return (
        <div className="ExpDataType">
            <p>
                {expNum1}, {expNum2}
            </p>
        </div>

    )
}

export default ExpDataType