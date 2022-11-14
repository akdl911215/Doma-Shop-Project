function ClassObject2() {
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
    }

    let obj = new Obj()

    console.log("obj.name : " + obj.name)
    console.log("obj.major : " + obj.major)
    console.log("obj.getName : " + obj.getName())
    console.log("obj.getMajor : " + obj.getMajor())

    obj.display()

    return (
        <div className="ClassObject">
            <p>
                ClassObject2
            </p>
        </div>
    )
}

export default ClassObject2