const AddSetTest = () => {
    let setData = new Set()

    setData.add("Cherry")
    setData.add("strawberry")
    setData.add("apple")

    // 징 : addSet은 해당배열에 지정한 값이 존재하냐?
    // ture false로 반환한다.

    console.log(setData)
    // 출력 : {"Cherry", "strawberry", "apple"}
    console.log("addSetTest: " + setData.has("apple"))
    // 출력 : true
    console.log("addSetTest: " + setData.has("grape"))
    // 출력 : false

    return (
        <div className="AddSetTest">
            <p>
                AddSetTest
            </p>
        </div>
    )
}
export default AddSetTest