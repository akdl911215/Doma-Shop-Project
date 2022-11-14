const Test2 = () => {

    const months = ['Market' , 'Feed', 'Jeadong', "Doctor"]
    months.sort()
    console.log(months)
    // 출력 : ["Doctor", "Feed", "Jeadon", "Market"]
    months.sort((a,b) => b - a)
    console.log(months)
    // 출력 : ["Doctor", "Feed", "Jeadon", "Market"]

    const num = [20 , 1 , 10, 9]
    num.sort()
    console.log(num)
    // 출력 : [1, 10, 20, 9]
    num.sort((a,b) => b - a)
    console.log(num)
    // 출력 : [20, 10, 9, 1]


    return (
        <div className="Test2">
            <p>Test2</p>
        </div>
    )
}
export default Test2