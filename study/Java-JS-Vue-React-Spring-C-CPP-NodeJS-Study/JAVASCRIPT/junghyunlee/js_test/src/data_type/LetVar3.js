function LetVar3() {
    var varNum = 33

    console.log("varNum test : " + varNum)

    var varNum = "뭐야?"

    console.log("varNum test :" + varNum ) // let과 var의 차이점 정리

    var varNum = 7 + 7 + "뭐게?"

    console.log("let test : varNum =  " + varNum)

    var varNum = "뭐야? 그럼 이거는 ? " + 7 + 7

    console.log("let test : varNum =  " + varNum)
    console.log("var test : " + varNum)

    var varNum = "뭐야?"

    console.log("var test :" + varNum ) // let과 var의 차이점 정리
    return (
        <div className="LetVar3">
            <p>
                var {varNum}<br/>
            </p>

        </div>
    )

}

export default LetVar3