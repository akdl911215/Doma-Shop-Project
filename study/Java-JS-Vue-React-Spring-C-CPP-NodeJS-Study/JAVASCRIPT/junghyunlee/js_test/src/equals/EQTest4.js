const EQTest4 = () => {
    let name = "test"

    // 값이 뭔가 있으면 ??? true
    if(name == null) {
        console.log("equal")
    } else {
        console.log("not equal")
    }

    return (
        <div className="EQTest4">
            <p>
                EQTest4
            </p>
        </div>
    )
}

export default EQTest4