function ObjectTest() {
    let obj = {
        name: "test",

        getName: function() {
            return this.name
        },
        setName: function(name) {
            this.name = name
        },
        display: function() {
            console.log(this.name)
        }
    }

    // test
    console.log(obj.getName())

    obj.setName("gogosing")
    console.log(obj.getName())

    obj.display()
    // 오브젝트의 속성 getName을 호출
    console.log(obj["getName"]())

    // obj에 setName 값에 Star Ocean을 할당하라
    obj["setName"]("Star Ocean")
    console.log(obj["getName"]())

    return (
        <div className="ObjcetTEst">
            <p>
                ObjecTEst
            </p>
        </div>
    )
}

export default ObjectTest