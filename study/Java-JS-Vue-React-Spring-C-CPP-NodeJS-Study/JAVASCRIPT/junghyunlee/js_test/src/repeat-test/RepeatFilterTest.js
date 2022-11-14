const RepeatFilterTest = () => {
    let seq = [1, 2, 3, 4, 5]
    let over3 = seq.filter(filterFunc)
    // filter 또한 map 과 유사하지만
    // 특정한 값을 걸러낸다는 의미로 활용한다.
    // 마찬가지로 seq에 있는 요소들을 모두 빼서 filterFunc으로 전달한다.

    // filer or map 이 쓰레드와 잘 어울림.

    function filterFunc(value) {
        return value > 3
    }

    console.log("seq: " + seq)
    console.log("over3: " + over3)

    return(
        <div className="RepeatFilterTest">
            <p>
                RepeatFilterTest
            </p>
        </div>
    )
}

export default RepeatFilterTest