const MapIterationTest = () => {
    let mapData = new Map(
        [
            ["apple", "red"], ["grape", "purple"], ["바보", "천!재"], [1, 20]
            // 앞 = key 값  // 뒤 = value 값.
        ]
    )

    console.log(mapData)
    // 출력 : {"apple" => "red", "grape" => "purple", "바보" => "천!재", 1 => 20}

    var keyIter = mapData.keys()

    for (var key of keyIter) {
        console.log(key)
        // 출력 : apple
        //       grape
        //        바보
        //         1
    }

    var valueIter = mapData.values()

    for (var value of valueIter) {
        console.log(value)
        // 출력 : red
        //       purple
        //       천!재
        //       20
    }

    var entryIter = mapData.entries()

    for (var entry of entryIter) {
        console.log(entry)
        // 출력 : {"apple", "red"}
        //        {"grap", "purple"}
        //        {"바보", "천!재"}
        //        {1, 20}
    }

    mapData.forEach(
        (value, key) =>
            console.log(key + " : " + value)
        // 출력 : apple : red
        //       grap : purple
        //        바보 : 천!재
        //        1 : 20
    )

    return (
        <div className="MapIterationTest">
            <p>MapIterationTest</p>
        </div>
    )
}

export default MapIterationTest