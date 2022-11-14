const ArraySortTest = () => {
    let arr = [1, 3, 8, 10, 5, 7, 11, 19, 77, 33]

    console.log("Before Reverse: " + arr)
    // arr 배열을 반대로 출력한다.
    arr.reverse()
    console.log("After Reverse: " + arr)

    return(
        <div className="ArraySortTest">
            <p>
                arry-test: ArraySortTest
            </p>
        </div>
    )
}

export default ArraySortTest