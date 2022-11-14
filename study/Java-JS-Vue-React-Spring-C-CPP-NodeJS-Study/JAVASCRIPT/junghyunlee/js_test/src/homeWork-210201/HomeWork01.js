const HomeWork01 = () => {
    //  1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, ......
    // 첫째, 둘째, 셋째 더해서 넷째 출력.

    // 내가 원하는 항의 값을 출력
    // 숫자 입력
    let oneNum = 1

    function inputNumber(num) {

        let firstNum = oneNum;
        let SecondNum = oneNum;
        let ThirdNum = oneNum;
        let totalNum

        if(num == 1 || num == 2 || num ==3){
            console.log("%d 항의 출력 값은 = %d", num, 1)
        } else {
        for (var i = oneNum; i <= num - 3 ; i++) {

            totalNum = firstNum + SecondNum + ThirdNum

            firstNum = SecondNum
            SecondNum = ThirdNum
            ThirdNum = totalNum
            }
            console.log("%d 항의 출력 값은 = %d", num, totalNum)
        }

        return num
    }

    let a = inputNumber(10)
    let b = inputNumber(1)
    let c = inputNumber(5)

    return (
        <div className="HomeWork01">
            <p>
                Home Work01
            </p>
        </div>
    )
}

export default HomeWork01