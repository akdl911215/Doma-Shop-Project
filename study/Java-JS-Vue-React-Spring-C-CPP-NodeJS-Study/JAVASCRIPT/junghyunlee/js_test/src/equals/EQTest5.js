const EQTest5 = () => {
    let name = "test"

    // 값이 뭔가 있으면 ??? true
    if(name == true) {
        console.log("equal")
    } else {
        console.log("not equal")
    }

    return (
        <div className="EQTest5">
            <p>
                EQTest5
            </p>
        </div>
    )
}

export default EQTest5