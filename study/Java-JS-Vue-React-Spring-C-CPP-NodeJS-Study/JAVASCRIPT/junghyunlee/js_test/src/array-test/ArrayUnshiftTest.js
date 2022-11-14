const ArrayUnShiftTest = () => {

    let arr = ["one", "two", "three"]

    console.log("Before shift = " + arr)

    // Queue(큐) 형태의 값 빼기 방식이라고 봐도 무방하다.
    // Stack은 후입선출, Queue는 선입선출이다.
    let len = arr.unshift("333")

    console.log("After Shift = " + arr)
    console.log("Shift Length = " + len)

    return (
        <div className="ArrayUnShiftTest">
            <p>
                Array Unshift Test
            </p>
        </div>
    )
}

export default ArrayUnShiftTest