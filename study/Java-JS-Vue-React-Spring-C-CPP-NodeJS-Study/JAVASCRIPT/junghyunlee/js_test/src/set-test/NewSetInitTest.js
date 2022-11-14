const NewSetInitTest = () => {
    let setData = new Set(["Banana", "Watermelon"])

    console.log("NewSetInitTest: " + setData)
    // 출력 : [object Set]
    console.log("NewSetInitTest: " + setData.size)
    // 출력 : 2

    return (
        <div className="NewSetInitTest">
            <p>NewSetInitTest</p>
        </div>
    )
}

export default NewSetInitTest
