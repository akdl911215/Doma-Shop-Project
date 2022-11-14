const FunctionObjectTest3 = () => {

    function Phtoshop() {
        this.name = "JungHyun"
        this.students = 31
    }

    Phtoshop.prototype.getName = function() {
        return this.name
    }

    let prog = new Phtoshop()

    if(Phtoshop) {
        console.log("FunctionObjectTest3: Phtoshop true")
    } else {
        console.log("FunctionObjectTest3: Phtoshop false")
    }

    console.log("값은 뭔가요 ? = " + Phtoshop)

    // [object Object] 출력
    console.log("prog 를 출력합니다: " + prog)

    if(prog) {
        console.log("prog 참: prog true")
    } else {
        console.log("prog 거짓 : prog false")
    }

    console.log("prog.name 출력 : " + prog.name)

    if(prog.name) {
        console.log("name 참 : prog.name true")
    } else {
        console.log("name 거짓: prog.name false")
    }

    console.log("prog.students 출력 : " + prog.students)

    if(prog.students) {
        console.log("students 참 : prog.students true")
    } else {
        console.log("students 거짓 : prog.students false")
    }

    // 출력값 :
    // getName  출력 : function () {
    //     return this.name;
    //   }
    console.log("getName  출력 : " + prog.getName)

    // 겟네임뒤에 ()가 있냐없냐 차이

    // 출력가ᇪ : JungHyun
    // 왜 출력 값이 다르지?
    console.log("왜 출력 값이 다르지? : " + prog.getName())

    if(prog.getName) {
        console.log("prog.getName 참 : prog.getName true")
    } else {
        console.log("prog.getName 거짓: prog.getName false")
    }

    if(prog.getName()) {
        console.log("prog.getName() 참 : prog.getName true")
    } else {
        console.log("prog.getName() 거짓: prog.getName false")
    }

    console.log("prog.toString 출력 : " + prog.toString)
    console.log("prog.toString() 출력 : " + prog.toString())

    if(prog.toString) {
        console.log("prog.toString 참 : prog.toString true")
    } else {
        console.log("prog.toString 거짓 : prog.toString false")
    }

    if(prog.toString()) {
        console.log("prog.toString 참 : prog.toString true")
    } else {
        console.log("prog.toString 거짓: pro.toString false")
    }

    console.log("prog.name2 출력 : " + prog.name2)

    // 자바스크립트에서 없는 것은 결국 undefined로 false 처리됨
    if(prog.name2) {
        console.log("prog.name2 참 : prog.name2 true")
    } else {
        console.log("prog.name2 거짓 : prog.name2 false")
    }

    console.log("prog.Name2 출력 : " + prog.getName2)

    if(prog.getName2) {
        console.log("prog.Name2 참 : prog.getName2 true")
    } else {
        console.log("prog.Name2 거짓 : prog.getName2 false")
    }

    console.log("name in prog 추ᇐ력 : " + ("name" in prog))
    console.log("students in prog 출력 : " + ("students" in prog))
    console.log("getName in prog 출력 : " + ("getName" in prog))
    console.log("name2 in prog 출력 : " + ("name2" in prog))


    // ~~ in 객체에서 잡히고
    // hasOwnProperty에서 거짓이 나오면 필요에 의해 새로 추가한 객체
    // 양쪽 모두에서 잡히면 원래부터 가지고 있던 순수한 속성

    // 모든 객체는 hasOwnProperty를 상속하는 Object의 자식이다.
    // 이 메소드는 객체가 특정 프로퍼티를 자기만의 직접적인 프로터피로서
    // 소유하고 있는지를 판단하는데 사용된다. in 연산과는 다르게, 이 메소드는
    // 객체의 프로토 타입 체인인을 확하지 않는다.
    console.log("hasOwnProperty: sutdernts : " +
        (prog.hasOwnProperty("students")))
    console.log("hasOwnProperty : getName: " +
        (prog.hasOwnProperty("getName")))
    console.log("toString in prog : " +
        ("toString" in prog))
    console.log("hasOwnProperty : tostring : " +
        (prog.hasOwnProperty("toString")))

    return (
        <div className="FunctionObjectTest3">
            <p>
                Function Object Test 3
            </p>
        </div>
    )
}

export default FunctionObjectTest3