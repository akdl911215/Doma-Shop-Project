function LetVar2() {

    // let 으로 할당해놓은것은 중복으로 할당이 불가능하다.
    let num = 77

    console.log("let test : num =  " + num)

    num = "뭐야?"

    console.log("let test : num =  " + num)

    num = 7 + 7 + "뭐게?"

    console.log("let test : num =  " + num)

    num = "뭐야? 그럼 이거는 ? " + 7 + 7

    console.log("let test : num =  " + num)

    num = 77

    console.log("let test : " + num)

    num = "뭐야?"

    return (
        <div className="LetVar2">
            <p>
                let {num}<br/>
            </p>

        </div>
    )

}

export default LetVar2