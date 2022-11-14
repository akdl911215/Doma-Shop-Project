const ArrayPushTest = () => {
    var arr = ["one", "two", "three"]

    console.log("Before Push = " + arr)

    let len = arr.push("seven")

    // one, two, three, seven
    console.log("After Push = " + arr)
    // 4
    console.log("Arr Length = " + len)

    let len2 = arr.push("팔")

    // one, two, three, seven, 팔
    console.log("After Push = " + arr)
    // 5
    console.log("Arr Length = " + len2)


    return (
        <div className="ArrayPushTest">
            <p>
                Array Push Test
            </p>
        </div>
    )
}

export default ArrayPushTest