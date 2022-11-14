const ForEachWithSet = () => {
    let setData = new Set()

    setData.add("Cherry")
    setData.add("strawberry")
    setData.add("apple")

    console.log(setData)

    // (val1, val2) or (va1, val3) or (val2, val3)
    // 동일하게 출력
    // 매개변수명은 달라도 영향은 없다.
    // 다만, forEach 동작하면 setData에 데이터값들을 2개ᄊᆔᆨ
    // 출력해준다.

    setData.forEach(function(val1, val2) {
        console.log(val1 + " : " + val2)
    })
    // 출력 : Cherry : Cherry
    //   strawberry : strawberry
    //        apple : apple

    setData.forEach(function(val1, val3) {
        console.log(val1 + " : " + val3)
    })
    // 동일 출력

    setData.forEach(function(val2, val3) {
        console.log(val2 + " : " + val3)
    })
    // 동일 출력

    // arrow function은 ES6에 새롭게 추가된 기능으로 문법 코드가 간결하고
    // 직관적이어서 이미 많은 개발자들이 이용하고 있으며, 높은 비율로 function을
    // 대체하고 있다.

    // setData.forEach(function(val2, val3) { 을
    //  setData.forEach((val1, val2) => 대체하는 것임.
    setData.forEach((val1, val2) =>
        console.log("arrow - " + val1 + " : " + val2)
    )
    // 출력은 "arrow - "  제외하고 동일


    return (
        <div className="ForEachWithSet">
            <p>ForEachWithSet</p>
        </div>
    )
}

export default ForEachWithSet