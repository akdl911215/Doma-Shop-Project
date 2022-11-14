function DataType() {
    // 숫자 + 문자열은 숫자를 강제로 문자열로 바꿈
    var test1 = 7 + "Test"
    var test2 = "7" + "test"
    // 숫자 + 숫자는 숫자로 계산하고
    // 이후에 숫자 + 문자열로 인해 숫자를 문자열로 바꿈
    var numTest = 3 + 7 + "Test"
    // 하지만 문자열이 앞에 있으면 문자열로만 출력
    var numTest2 = "9" + "Test" + 3 + 7
    var numTest3 = "Test" + 3 + 7

    console.log("DataType: " + test1)
    console.log("DataType: " + test2)
    console.log("DataType: " + numTest)

    console.log("DataType: " + numTest2)
    console.log("DataType: " + numTest3)


    return (
        <div className="DataType">
            <p>

                {test1}, {test2}, {numTest}. {numTest2}, {numTest3}

                {test1}, {test2}, {numTest}.

            </p>
        </div>
    )
}

export default DataType
