function ClassObject() {
    class Obj {
        // 자바와 자바스크립트 클래스 생성시
        // 생성자를 constructor()로 사용해야 한다.
        constructor() {
            this.name = "test"
            this.major = "electronics"
        }
    }

    let obj = new Obj()

    console.log("ClassObjectob : " + obj.name)
    console.log("ClassObjectob : " + obj.major)

    return (
        <div className="ClassObject">
            <p>
                ClassObject
            </p>
        </div>
    )
}

export default ClassObject