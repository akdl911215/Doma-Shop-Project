const ApplyMathTest = () => {
    let arr = [1, 3, 8, 10, 5, 7, 11, 19, 77, 33]

    function findArrMax(arr) {
        return Math.max.apply(null, arr)
    }

    function findArrMin(arr) {
        return Math.min.apply(null, arr)
    }

    console.log("Before findArrMax() = " + arr)
    // 배열의 끝 값 출력
    console.log("findArrMax() = " + findArrMax(arr))
    // 배열의 처음 값 출력
    console.log("findArrMin() = " + findArrMin(arr))

    return(
        <div className="ApplyMathTest">
            <p>
                Apply Math Test
            </p>
        </div>
    )
}

export default ApplyMathTest