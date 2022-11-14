const NewMapInitTest = () => {
    let mapData = new Map(
        [
            ["apple", "red"], ["grape", "purple"]
        ]
    )

    console.log(mapData)
    // 출력 : {"apple" => "red", "grape" => "purple"}
    console.log("Size: " + mapData.size)
    // 출력 : 2

    return (
        <div className="NewMapInitTest">
            <p>NewMapInitTest</p>
        </div>
    )
}

export default NewMapInitTest