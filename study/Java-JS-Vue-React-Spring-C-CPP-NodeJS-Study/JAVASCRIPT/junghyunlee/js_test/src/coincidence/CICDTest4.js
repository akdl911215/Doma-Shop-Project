const CICDTest4 = () => {
    let name = "test"

    // 값이 뭔가 있으면 ??? true
    if(name === null) {
        console.log("equal")
    } else {
        console.log("not equal")
    }

    return (
        <div className="CICDTest4">
            <p>
                CICDTest4
            </p>
        </div>
    )
}

export default CICDTest4