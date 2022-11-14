const SetEntryIterationTest = () => {
    console.log("SetEntryIterationTest Start")

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

    var setIter = setData.entries()

    for (var entry of setIter) {
        console.log(entry)
        // 출력 : {"Cherry", "Cherry"}
        //              ...
        //        {999, 999}
    }

    console.log("SetEntryIterationTest Fin")

    return (
        <div className="SetEntryIterationTest">
            <p>SetEntryIterationTest</p>
        </div>
    )
}

export default SetEntryIterationTest