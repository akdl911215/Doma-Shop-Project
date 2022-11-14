function TestWork(){
    //아래와 같은 수열이 있다.
    //    1, 1, 1, 3, 5, 9, 17, 31, 57, 105, 193, ......
    //    이 수열의 20 번째 값을 구할 수 있도록 프로그래밍 해보자!
    let ONE = 1
    let ZERO = 0
    let THREE = 3
    class fibonacci{
        constructor(num) {
            this.num = num
        }

        fiboWork(num){
            let first = ONE
            let second = ONE
            let third = ONE
            let res
            if(num <= THREE){
                console.log("%d항의 출력 값 = %d " , num, ONE )
            } else {
                for(let i =ZERO;i <num-THREE;i++){
                    res = first +second +third
                    first = second
                    second = third
                    third = res
                }
                console.log("%d항의 값 = %d",num,res)
            }
        }
    }
    let fibo = new fibonacci
    fibo.fiboWork(9)
    fibo.fiboWork(20)
    return(
        <div className="HomeWork01">
            <p>
                HomeWork01
            </p>
        </div>
    )
}
export default TestWork