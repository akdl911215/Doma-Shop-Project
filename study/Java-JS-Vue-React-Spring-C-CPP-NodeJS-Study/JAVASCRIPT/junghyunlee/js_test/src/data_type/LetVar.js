function LetVar() {

    let num = 77

    console.log("num77 = " + num)
    console.log("let은 Hoisting 되지 않으며 let 위에서 해당변수를 사용할수 있다.")
    //varTest는 선언된게 없으므로 undefind
    console.log("var는 되나요? " + varTest + "는 되네?!")

    var varTest = "이거 되는거 맞냐?"
    console.log("varTest = " + varTest)

    const conNum = 33

    // 새로운 바테스트를 쓰면 덮어쓰여진다(오버라이트)
    // let varTest의 경우에는 불가능하다.
    varTest = "정말 되는거야?"
    console.log("varTest = " + varTest)
    console.log("num = " + num)
    console.log("let은 Hoisting 되지 않으며 let 위에서 해당변수를 사용할수 있다.")
    console.log("var는 되나요? " + varTest + "는 되네?!")

    var varTest = "이거 되는거 맞냐?"

    varTest = "정말 되는거야?" // 새로운 바테스트를 쓰면 덮어쓰여진다(오버라이트)

    console.log("conNum = " + conNum)
    console.log("const는 반드시 선언과 함께 값의 초기화가 이루어져야 한다.")

    return (
        <div className="LetVar">
            <p>
                let {num}<br/>
                const {conNum}<br/>
                var {varTest}<br/>


            </p>

        </div>
    )

}

export default LetVar