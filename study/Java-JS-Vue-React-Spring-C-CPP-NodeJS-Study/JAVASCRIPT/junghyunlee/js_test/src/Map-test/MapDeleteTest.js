const MapDeleteTest = () => {
    let mapData = new Map(
        [
            ["apple", "red"], ["grape", "purple"]
        ]
    )

    console.log(mapData)
    // 출력 : {"apple" => "red", "grape" => "purple"}

    mapData.delete("apple")

    console.log(mapData)
    // 출력 : {"grape" => "purple"}

    mapData.clear()
    // clear 는 모든 값을 지운다.

    console.log(mapData)
    // 출력 : { }

    let mapData2 = new Map(
        [
            ["apple", "red"], ["grape", "purple"], ["코딩", "천재"]
        ]
    )

    console.log(mapData2)
    // 출력 : {"apple" => "red", "grape" => "purple", "코딩" => "천재"}

    mapData2.clear()
    console.log(mapData2)
    // 출력 : { }

    let mapData3 = new Map(
        [
            ["apple", "red"], [1, 999], ["코딩", "천재"]
        ]
    )

    console.log(mapData3)
    // 출력 : {"apple" => "red", 1 => 999, "코딩" => "천재"}

    mapData3.delete(1)

    console.log(mapData3)
    // 출력 : {"apple" => "red", "코딩" => "천재"}

    return (
        <div className="MapDeleteTest">
            <p>MapDeleteTest</p>
        </div>
    )
}

export default MapDeleteTest