const MapSetTest = () => {
    let mapData = new Map(
        [
            ["apple", "red"], ["grape", "purple"]
        ]
    )

    console.log(mapData)
    // 출력 : {"apple" => "red", "grape" => "purple"}

    mapData.set("test1", "blue")
    mapData.set("test2", "green")
    // set 으로 mapData => ("test1", "blue") ("test2", "green") 추가.

    console.log(mapData)
    // 출력 : {"apple" => "red", "grape" => "purple", "test1" => "blue", "test2" => "green"}
    console.log(mapData.get("test2"))
    // 출력 : green // test2 의 속성값을 출력
    console.log(mapData.get("grape"))
    // 출력 : purple // grape 의 속성값을 출력
    console.log(mapData.has("test1"))
    // 출력 : true // set과 map 객체에 주어진 요소가 존재하는지 여부를 판별해 반환
    console.log(mapData.has("apple"))
    // 출력 : true
    console.log(mapData.has("헤헿"))
    // 출력 : false

    return (
        <div className="MapSetTest">
            <p>MapSetTest</p>
        </div>
    )
}

export default MapSetTest