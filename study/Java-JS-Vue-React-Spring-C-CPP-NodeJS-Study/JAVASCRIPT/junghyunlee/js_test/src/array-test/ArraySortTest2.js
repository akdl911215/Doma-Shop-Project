const ArraySortTest2 = () => {
    let arr = [1, 3, 8, 10, 5, 7, 11, 19, 77, 33]

    console.log("Before Sort: " + arr)
    arr.sort(function (a,b){
        return a - b
    })
    // 위의 함수를 밑에처럼 줄여쓸 수 있음
    // = () => 사용하면 간략해진다.
    //arr.sort((a,b) => b - a)

    // arr 오름차순 정렬
    console.log("After up Sort: " + arr)
    // 위의 함수를 밑에처럼 간결하게 가능하다.
    arr.sort((a,b) => b - a)
    // arr 내림차순 정렬
    console.log("After down Sort: " + arr)

    // 배열의 끝값 77
    console.log("Find Max = " + arr[arr.length -1])
    // 배열의 처음값 1
    console.log("Find Min = " + arr[0])

    return(
        <div className="ArraySortTest2">
            <p>
                arry-test: ArraySortTest2
            </p>
        </div>
    )
}

export default ArraySortTest2