function ClassExtends() {
    class Obj {
        constructor(name) {
            this._name = "extends"
        }
        getName() {
            return this._name
        }
        setName(name) {
            this._name = name
        }
        display() {
            console.log("ClassExtends: " + this._name)
        }
    }

    let obj = new Obj("test1")

    obj.display()

    class ExtendsObj extends Obj {
        constructor() {
            super();
        }
    }

    let extObj = new ExtendsObj()

    extObj.setName("Extends TestPromise")
    extObj.display()

    return (
        <div className="ClassExtends">
            <p>
                ClassExtends
            </p>
        </div>
    )
}

export default ClassExtends