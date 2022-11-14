function ClassExtends2() {
    class Obj {
        constructor() {
            this._name = "extends2"
        }
        getName() {
            return this._name
        }
        setName(name) {
            this._name = name
        }
        display() {
            console.log("ClassExtends(display) : " + this._name)
        }
        toString() {
            throw new Error('매서드를 구현하세요!!')
        }
    }

    let obj = new Obj()

    obj.display()

    class ExtendsObj extends Obj {
        constructor() {
            super();
        }
        toString() {
            return "overload!"
        }
    }

    let extObj = new ExtendsObj()

    extObj.setName("Extends2 TestPromise")
    extObj.display()

    console.log("extObj.toString() = " + extObj.toString())
    console.log(extObj)

    return (
        <div className="ClassExtends2">
            <p>
                ClassExtends2
            </p>
        </div>
    )
}

export default ClassExtends2