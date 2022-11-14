const RepeatSomeTest = () => {
    // or연산(합집합)
    let seq = [1, 2, 3, 4, 5]
    let orTestSucess = seq.some(orTestFunc)

    function orTestFunc(value) {
        return value > 3
    }

    // 다시해보기
    console.log("After some(): " + orTestSucess)

    let orTestSucess2 = seq.some(orTestFunc)
    function orTestFunc(value) {
        return value > 6
    }

    console.log("After some(): " + orTestSucess2)

    return(
        <div className="RepeatSomeTest">
            <p>
                RepeatSomeTest
            </p>
        </div>
    )
}

export default RepeatSomeTest