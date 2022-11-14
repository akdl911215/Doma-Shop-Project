const EQTest2 = () => {
    let name = "test"

    // 값이 뭔가 있으면 ??? true
    if(name == "test") {
        console.log("equal")
    } else {
        console.log("not equal")
    }

    return (
        <div className="EQTest2">
            <p>
                EQTest2
            </p>
        </div>
    )
}

export default EQTest2