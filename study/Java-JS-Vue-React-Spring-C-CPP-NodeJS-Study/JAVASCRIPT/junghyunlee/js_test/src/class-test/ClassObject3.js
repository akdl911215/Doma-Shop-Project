function ClassObject3() {
    class Obj {
        constructor() {
            this.name = "test"
            this.major = "electronics"
        }

        getName() {
            return this.name
        }

        getMajor() {
            return this.major
        }

        setName(name) {
            this.name = name
        }

        setMajor(major){
            this.major = major
        }

        display() {
            console.log("this.name: " + this.name)
            console.log("this.major: " + this.major)
        }

        static getStaticTest(isTest, number) {
            if(isTest) {
                return 333
            } else {
                // paraseInt(숫자값, 표현하는 진법)
                return parseInt(3.3 * number, 10)
            }
        }
    }

    let obj = new Obj()

    console.log("ClassObjectob : " + obj.name)
    console.log("ClassObjectob : " + obj.major)
    console.log("ClassObjectob : " + obj.getName())
    console.log("ClassObjectob : " + obj.getMajor())

    obj.display()

    console.log("Obj.getStaticTest: " + Obj.getStaticTest(true))
    console.log("Obj.getStaticTest: " + Obj.getStaticTest(false, 100))

    return (
        <div className="ClassObject3">
            <p>
                ClassObject3
            </p>
        </div>
    )
}

export default ClassObject3