const SetKeyIterationTest = () => {
    console.log("SetKeyIterationTest Start")

    let setData = new Set()

    setData.add("Cherry")
    setData.add("strawberry")
    setData.add("apple")
    setData.add("바보")
    setData.add("천!재!")
    setData.add("!@#$%^")
    setData.add(1)
    setData.add(999)

    console.log(setData)
    // 출력 : {"Cherry", "strawberry", .....}
    //        모든게 출력이 된다.

    var setIter = setData.keys()

    for (var key of setIter) {
        console.log(key)
        // 출력 : Cherry
        //         ...
        //         999
    }

    console.log("SetKeyIterationTest Fin")

    return (
        <div className="SetIterationTest">
            <p>SetKeyIterationTest</p>
        </div>
    )
}

export default SetKeyIterationTest
