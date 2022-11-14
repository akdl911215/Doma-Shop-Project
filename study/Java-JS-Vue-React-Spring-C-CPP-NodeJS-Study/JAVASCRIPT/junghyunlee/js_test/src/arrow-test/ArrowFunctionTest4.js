const ArrowFunctionTest4 = () => {
    const calculator = {
        firstNum: 3,
        secondNum: 7,

        // 자바 스크립트는 변수든 매서드든 뭐가 된건
        // 전부 객체 취급하기 때ᄆᆍᆫ
     print: function () {
            const add = () => {
                // JSON.stringify() 를 사용하면 안의 내용을 볼 수 있다.
                console.log("ArrowFunctionTest4: " + JSON.stringify(this))
                return this.firstNum + this.secondNum
            }

            console.log(this.firstNum + " + " +
            this.secondNum + " = " + add())
        }
    }

    calculator.print()

    return(
        <div className="ArrowFunctionTest4">
            <p>
                ArrowFunctionTest4
            </p>
        </div>
    )
}

export default ArrowFunctionTest4