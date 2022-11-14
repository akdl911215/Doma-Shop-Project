const HomeWork03 = () => {
    //  자바스크립트 배열에 랜덤한 숫자를 n개 생성한다.
    //  n개의 배열에서 3의 배수만 골라보도록 하자!
    //  (이 문제는 중복을 허용한다)

    // 1) 배열을 만들어야한다 ( 랜덤한 배열 )
    // 2) 랜덤배열에서 3의 배수만 출력
    let zeroNum = 0
    let fiveNum = 5
    let twentyNum = 20
    let ERROR = -1

    let res = []
    let arr = []
    let distinguish = []

    // 랜덤 배열 생성
    // 배열의 길이는 입력한값
    // 배열의 값은 랜덤
    function randArr(numArr, choiceNum) {

        for(var i = zeroNum; i < numArr; i++) {
            let totalNum = Math.floor((Math.random() * twentyNum) + fiveNum)
            arr[i] = totalNum
            //console.log("%d 번 배열의 값 = %d" , i, totalNum)
            //console.log("%d 번 배열의 값 = %d" , i, arr[i])

            if(arr[i] % choiceNum == zeroNum) {
                //console.log("%d 번 arr배열의 값 = %d", i, arr[i])
                if(res.indexOf(arr[i]) == ERROR) {
                    res.push(arr[i])
                    //console.log("%d 번 res배열의 값 = %d", i, arr[i])

                    distinguish[i] = arr[i]
                    console.log("%d 번 distinguish 값 = %d", i, distinguish[i])
                }
            }
        }
        console.log("Before Sort = " + distinguish)
        let sortedArr = distinguish.sort((a,b) => b - a)
        console.log("After Sort = " + distinguish.join(" "))

    }

    // 배수 구별

    let a = randArr(20,5)


    return (
        <div className="HomeWork03">
            <p>
                Home Work 03
            </p>
        </div>
    )
}

export default HomeWork03