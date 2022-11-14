const HomeWork02 = () => {
    //  자바스크립트 배열에 랜덤한 숫자를 n개 생성한다.
    //  n개의 배열에서 3의 배수만 골라보도록 하자!
    //  (이 문제는 중복을 허용한다)

    // 1) 배열을 만들어야한다 ( 랜덤한 배열 )
    // 2) 랜덤배열에서 3의 배수만 출력
    let zeroNum = 0
    let fiveNum = 5
    let twentyNum = 20

    let arr = []

    // 랜덤 배열 생성
    // 배열의 길이는 입력한값
    // 배열의 값은 랜덤
    function randArr(numArr, choiceNum) {

        for(var i = zeroNum; i < numArr; i++) {
            let totalNum = Math.floor((Math.random() * twentyNum) + fiveNum)
            arr[i] = totalNum

            if(arr[i] % choiceNum == zeroNum) {
                console.log("%d 번 배열의 값 = %d", i, arr[i])
            }
        }
    }

    // 배수 구별

    let a = randArr(20,3)


    return (
        <div className="HomeWork02">
            <p>
                Home Work 02
            </p>
        </div>
    )
}

export default HomeWork02