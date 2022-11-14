function ObjectTest2() {
    let obj = {

        get name() {
            console.log("I'm Getter")
            return this._name
        },
        set name(value) {
            console.log("I'm Setter")
            return this._name
        }
    }

    // obj.name = 위의 get name을 요청한 것.
    console.log("ObjectTest2: " + obj.name)
    console.log("ObjectTest2: " + obj._name)

    obj.name = "gogosing"
    console.log(obj.name)

    return (
        <div className="ObjectTest2">
            <p>
                ObjectTest2
            </p>
        </div>
    )
}

export default ObjectTest2