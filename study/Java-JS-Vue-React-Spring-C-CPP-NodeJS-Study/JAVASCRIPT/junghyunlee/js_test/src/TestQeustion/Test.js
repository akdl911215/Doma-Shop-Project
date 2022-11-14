const Test = () => {

    function multiply(a, b = 1) {
        return a * b;
    }

    console.log(multiply(5,2))
    // 값 = 10

    console.log(multiply(5))
    // 값 = 5

    return (
        <div className="Test">
            <p>Test</p>
        </div>
    )
}
export default Test