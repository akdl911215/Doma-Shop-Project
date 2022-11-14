const EQTest = () => {
    let name = "test"

    // 값이 뭔가 있으면 ??? true
    if(name) {
        console.log("true")
    } else {
        console.log("false")
    }

    if(!name) {
        console.log("(not)true")
    } else {
        console.log("(not)false")
    }

    return (
        <div className="EQTest">
            <p>
                EQTest
            </p>
        </div>
    )
}

export default EQTest