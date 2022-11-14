const ArrayPopTest = () => {
    var arr = ["one", "two", "three"]

    console.log("Before Pop = " + arr)

    let elem = arr.pop()

    console.log("After Pop = " + arr)
    console.log("Pop Element = " + elem)

    let elem2 = arr.pop()

    console.log("After Pop = " + arr)
    console.log("Pop Element = " + elem2)

    let elem3 = arr.pop()

    console.log("After Pop = " + arr)
    console.log("Pop Element = " + elem3)

    let elem4 = arr.pop()

    console.log("After Pop = " + arr)
    console.log("Pop Element = " + elem4)

    return (
        <div className="ArrayPopTest">
            <p>
                Array Pop Test
            </p>
        </div>
    )
}

export default ArrayPopTest