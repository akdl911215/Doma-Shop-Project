const ArraySliceTest = () => {

    // Splice 는 작동하면 원본이 변경되지만
    // Slice 는 작동해도 원본은 바뀌지 않는다.
    let arr = [1, 2, 3, 4, 5, 6, 7]

    // 슬라이스 보
    console.log("Before Slice = " + arr)

    let slicedArr = arr.slice(3)

    console.log("slicedArr = " + slicedArr)
    console.log("After Slice = " + arr)

    arr = [1, 2, 3, 4, 5, 6, 7]

    console.log("Before Slice = " + arr)

    slicedArr = arr.slice(3)

    console.log("slicedArr = " + slicedArr)
    console.log("After Slice = " + arr)



    return (
        <div className="ArraySliceTest">
            <p>
                Array Slice Test
            </p>
        </div>
    )
}

export default ArraySliceTest