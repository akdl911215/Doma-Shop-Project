class IteratorManager {
    constructor() {
        this.itrData = []
    }
     add(data) {
        this.itrData.push(data)
    }
    //minus(data) {
    //    this.itrData.shift(data)
    //    }
    // Symbol.iterator 심볼은 객체에 대응하는 기본
    // 이레이터를 지정합니다.
    [Symbol.iterator]() {
        return this.itrData.values()
    }
}

const IteratorTest = () => {
    let iterData = ["one", "two", "three"]

    for (let entry of iterData) {
        console.log(entry)
        // 출력 : one
        //       two
        //       three
    }

    let varData = ["four", "five", "six"]

    let itr = varData[Symbol.iterator]()

    console.log(itr.next())
    // 출력 : {value: "four", done: false}
    console.log(itr.next())
    // 출력 : {value: "five", done: false}
    console.log(itr.next())
    // 출력 : {value: "six", done: false}
    console.log(itr.next())
    // 출력 : {value: undefined, done: true}

    let varItr = varData.values()

    console.log(varItr.next())
    // 출력 : {value: "four", done: false}
    console.log(varItr.next())
    // 출력 : {value: "five", done: false}
    console.log(varItr.next())
    // 출력 : {value: "six", done: false}
    console.log(varItr.next())
    // 출력 : {value: undefined, done: true}

    return (
        <div className="IteratorTest">
            <p>IteratorTest</p>
        </div>
    )
}

export default IteratorTest
